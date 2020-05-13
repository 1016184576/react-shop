import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../components/asyncComponent';
import styles from './index.module.scss';

const IndexComponent = asyncComponent(() => import('../index'));
const CartComponent = asyncComponent(() => import('../cart'));
const CenterComponent = asyncComponent(() => import('../../user/center'));

class HomeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      navList: [{
        text: '首页',
        icon: require('../../../assets/images/common/home1.png'),
        activeIcon: require('../../../assets/images/common/home2.png')
      }, {
        text: '购物车',
        icon: require('../../../assets/images/common/cart1.png'),
        activeIcon: require('../../../assets/images/common/cart2.png')
      }, {
        text: '我的',
        icon: require('../../../assets/images/common/my1.png'),
        activeIcon: require('../../../assets/images/common/my2.png')
      }],
      activeIndex: 0,
    }
  }

  goPage(index) {
    let url = '/index';
    if (index === 1) {
      url = 'cart';
    } else if (index === 2) {
      url = 'center';
    }
    this.props.history.replace(url)
    this.setState({ activeIndex: index });
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Switch>
            <Route path="/index" component={IndexComponent}></Route>
            <Route path="/cart" component={CartComponent}></Route>
            <Route path="/center" component={CenterComponent}></Route>
          </Switch>
        </React.Fragment>
        <div className={styles['bottom-nav']}>
          <ul>
            {
              this.state.navList.map((item, index) => {
                return (
                  <li className={this.state.activeIndex === index ? styles['active'] : ''} onClick={this.goPage.bind(this, index)} key={index}>
                    <img src={this.state.activeIndex === index ? item.activeIcon : item.icon} alt="" />
                    <span>{item.text}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeComponent;
