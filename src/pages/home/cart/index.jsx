import React from 'react';
import { observer, inject } from "mobx-react";
import HeaderComponent from '../../../components/headerComponent';
import CheckboxComponent from '../../../components/checkboxComponent';
import styles from './index.module.scss';

@inject(store => ({
  cartStore: store.cart
}))
@observer
class CartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allChecked: this.props.cartStore.cartList.length > 0,
      title: '标题',
      checkboxStyle: {
        marginLeft: '.2rem',
        marginRight: '.3rem'
      }
    }
  }
  componentDidMount() {
    this.props.cartStore.setTotal();
  }

  /**
   * 去结算
   */
  goBalance = () => {
    if (this.props.cartStore.cartList.length === 0) return;
  }

  //设置全选  
  setAllChecked = (checked) => {
    if (this.props.cartStore.cartList.length === 0) return;
    this.setState({
      allChecked: checked
    })
    this.props.cartStore.setAllChecked(checked);
  }

  /**
   * 商品勾选改变处理函数
   * @param {*} checked 
   * @param {*} index 
   */
  onCheckItem = (checked, index) => {
    let { cartStore } = this.props;
    cartStore.onChange(checked, index);
    this.setState({
      allChecked: !cartStore.cartList.some(item => item.checked === false)
    })
  }

  render() {
    let { cartStore } = this.props;
    return (
      <div className={'page ' + styles['cart-page']}>
        <HeaderComponent title="购物车" />
        <div className={styles['cart-main']}>
          {
            cartStore.cartList.length > 0 ?
              cartStore.cartList.map((item, index) => {
                return (
                  <div className={styles['cart-list']} key={index}>
                    <CheckboxComponent
                      style={this.state.checkboxStyle}
                      checked={item.checked}
                      index={index}
                      onChange={this.onCheckItem}
                      key={index}
                    />
                    <div className={styles['image-wrap']}>
                      <div className={styles['image']}><img src={item.img} alt={item.title} /></div>
                      <div className={styles['del']}>删除</div>
                    </div>
                    <div className={styles['goods-wrap']}>
                      <div className={styles['goods-title']}>{item.title}</div>
                      <div className={styles['goods-attr']}>
                        {
                          item.attrs.length > 0 ?
                            item.attrs.map((item2, index2) => {
                              return (
                                <span key={index2}>{item2.title}：{
                                  item2.param.length > 0 ?
                                    item2.param.map((item3, index3) => {
                                      return (
                                        <React.Fragment key={index3}>{item3.title}</React.Fragment>
                                      )
                                    })
                                    : ''
                                }</span>
                              )
                            })
                            : ''
                        }
                      </div>
                      <div className={styles['buy-wrap']}>
                        <div className={styles['price']}>¥{item.price}</div>
                        <div className={styles["amount-input-wrap"]}>
                          <div className={styles['btn'] + " " + styles['dec'] + " " + (item.amount === 1 ? styles["active"] : '')}
                            onClick={cartStore.subAmount.bind(null, index)}>-</div>
                          <div className={styles['amount-input']}>
                            <input type="tel" value={item.amount} readOnly />
                          </div>
                          <div className={styles['btn'] + " " + styles['inc']} onClick={cartStore.addAmount.bind(null, index)}>+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              : <div className={styles['null-item']} style={{ marginTop: "1.2rem" }}>您还没有选购商品，快去选择您喜欢的宝贝吧！</div>
          }
        </div>
        <div className={styles['orderend-wrap']}>
          <div className={styles['select-area']}>
            <CheckboxComponent
              style={this.state.checkboxStyle}
              checked={this.state.allChecked}
              onChange={this.setAllChecked.bind(this)}
              labelText="全选"
            />
            <div className={styles['total']}>合计：<span>{cartStore.total}</span></div>
          </div>
          <div className={cartStore.total > 0 ? styles['orderend-btn'] : styles['orderend-btn'] + " " + styles['disable']} onClick={this.goBalance.bind(this)}>去结算</div>
        </div>

      </div>
    )
  }
}

export default CartComponent;

