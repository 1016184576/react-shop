import React from 'react';
import { observer, inject } from 'mobx-react';
import HeaderComponent from '../../../components/headerComponent';
import ButtonComponent from '../../../components/buttonComponent';
import styles from './index.module.scss';

const orderStatusList = [{
  src: require('../../../assets/images/user/my/pay.png'),
  text: '待支付',
  path: '/order/index',
  status: '0'
}, {
  src: require('../../../assets/images/user/my/shouhuo.png'),
  text: '待收货',
  path: '/order/index',
  status: '1'
}, {
  src: require('../../../assets/images/user/my/comment.png'),
  text: '待评价',
  path: '/order/review',
  status: '2'
}];
const rightArrow = require('../../../assets/images/common/right_arrow.png');
const allOrderPath = {
  path: '/order/index',
  status: 'all'
}
@inject(store => ({
  userStore: store.user
}))
@observer
class CenterComponent extends React.Component {
  componentDidMount() {

  }

  buttonHandleClick() {
    alert(111)
  }

  goPath = item => {
    this.props.history.push(`${item.path}?status=${item.status}`);
  }

  render() {
    let { userStore } = this.props;
    let buttonText = userStore.authToken ? '注销' : '登录/注册';
    return (
      <div className="page">
        <HeaderComponent title="个人中心" />
        <div className={styles['user-info-warp']}>
          <div className={styles['user-info']}>
            <img src={userStore.avatarUrl} alt="" />
            <div className={styles['logged']}>
              <p>{userStore.nickName}</p>
              <span>我的积分:<label>{userStore.integral}</label></span>
            </div>
          </div>
        </div>
        <div className={styles['order-entry-warp'] + ' line-b'}>
          <div className={styles['all-order']}>全部订单</div>
          <div className={styles['order-entry']} onClick={this.goPath.bind(this, allOrderPath)}>查看全部订单></div>
        </div>
        <ul className={styles['order-status-warp']}>
          {
            orderStatusList.map((item, index) => {
              return (
                <li key={index} onClick={this.goPath.bind(this, item)}>
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