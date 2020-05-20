import React from 'react';
import { observer, inject } from 'mobx-react';
import HeaderComponent from '../../../components/headerComponent';
import ButtonComponent from '../../../components/buttonComponent';
import styles from './index.module.scss';

const orderStatusList = [{
  src: require('../../../assets/images/user/my/pay.png'),
  text: '待支付'
}, {
  src: require('../../../assets/images/user/my/shouhuo.png'),
  text: '待收货'
}, {
  src: require('../../../assets/images/user/my/comment.png'),
  text: '待评价'
}];
const rightArrow = require('../../../assets/images/common/right_arrow.png');

@inject('user')
@observer
class CenterComponent extends React.Component {
  componentDidMount() {

  }

  buttonHandleClick(){
    alert(111)
  }

  render() {
    let state = this.props.user;
    let buttonText = state.authToken ? '注销' : '登录/注册';
    return (
      <div className="page">
        <HeaderComponent title="个人中心" />
        <div className={styles['user-info-warp']}>
          <div className={styles['user-info']}>
            <img src={state.avatarUrl} alt="" />
            <div className={styles['logged']}>
              <p>{state.nickName}</p>
              <span>我的积分:<label>{state.integral}</label></span>
            </div>
          </div>
        </div>
        <div className={styles['order-entry-warp'] + ' line-b'}>
          <div className={styles['all-order']}>全部订单</div>
          <div className={styles['order-entry']}>查看全部订单></div>
        </div>
        <ul className={styles['order-status-warp']}>
          {
            orderStatusList.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.src} alt="" />
                  <p>{item.text}</p>
                </li>
              )
            })
          }
        </ul>
        <ul className={styles['menu-list-warp']}>
          <li className="line-b">
            <span>个人资料</span>
            <img src={rightArrow} alt="" />
          </li>
          <li className="line-b">
            <span>收货地址</span>
            <img src={rightArrow} alt="" />
          </li>
          <li className="line-b">
            <span>绑定手机</span>
            <img src={rightArrow} alt="" />
          </li>
          <li className="line-b">
            <span>修改密码</span>
            <img src={rightArrow} alt="" />
          </li>
          <li className="line-b">
            <span>我的收藏</span>
            <img src={rightArrow} alt="" />
          </li>
        </ul>
        <div className={styles['footer']}>
          <ButtonComponent buttonText={buttonText} width="70%" onClick={this.buttonHandleClick.bind(this)} />
        </div>
      </div>
    )
  }
}

export default CenterComponent;