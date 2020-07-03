import React, { Component } from 'react';
import HeaderComponent from '../../../../components/headerComponent';
import { getUrlParams } from "../../../../utils";
import asyncComponent from '../../../../components/asyncComponent';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './index.module.scss';

const OrderComponent = asyncComponent(() => import('../order'));
const ReviewComponent = asyncComponent(() => import('../review'));
let bbb = {
  value: 1
}
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tabActive: 'all',
      tabs: [{
        text: '全部订单',
        path: '/order/index',
        status: 'all'
      }, {
        text: '待付款',
        path: '/order/index',
        status: '0'
      }, {
        text: '待收货',
        path: '/order/index',
        status: '1'
      }, {
        text: '待评价',
        path: '/order/review',
        status: '2'
      }]
    }
  }

  componentDidMount() {
    let params = getUrlParams(this.props.location.search);
    if (!params.status) return;
    this.state.tabs.map(tab => {
      if (tab.status == params.status) {
        this.setState({
          title: tab.text,
          tabActive: tab.status
        })
      }
    })
  }

  tabClick = item => {
    this.setState({
      tabActive: item.status,
      title: item.text
    }, () => {
      //解决无法触发参数更新的问题，中转跳转一下
      this.props.history.push({
        pathname: '/transfer',
        query: {
          path: `${item.path}?status=${item.status}`
        }
      });
    });
  }

  render() {
    return (
      <div className={'page ' + styles['order-page']}>
        <HeaderComponent title={this.state.title} onLeftClick={() => this.props.history.push('/center')} />
        <ul className={styles['order-tabs']}>
          {
            this.state.tabs.map((item, index) => {
              return (
                <li className={item.status == this.state.tabActive ? styles['active'] : ''}
                  onClick={this.tabClick.bind(this, item)}
                  key={item.status}>{item.text}</li>
              )
            })
          }
        </ul>
        <div className={styles['order-main']}>
          <React.Fragment>
            <Switch>
              <Route path={`${this.props.match.path}/index`} component={OrderComponent}></Route>
              <Route path={`${this.props.match.path}/review`} component={ReviewComponent}></Route>
              <Redirect to={`${this.props.match.path}/index`}></Redirect>
            </Switch>
          </React.Fragment>
        </div>
      </div>
    )
  }
}

export default Index;