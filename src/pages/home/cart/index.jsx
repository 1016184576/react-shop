import React from 'react';
import { Toast } from 'antd-mobile';
import HeaderComponent from '../../../components/headerComponent';
import CheckboxComponent from '../../../components/checkboxComponent';
import styles from './index.module.scss';
class CartComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [
        {
          "gid": "143208071",
          "title": "高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带",
          "amount": 1,
          "price": 12.8,
          "img": "//vueshop.glbuys.com/uploadfiles/1524556409.jpg",
          "checked": true,
          "freight": 20,
          "attrs": [
            {
              "attrid": "1034",
              "title": "颜色",
              "param": [
                {
                  "paramid": "1471",
                  "title": "紫色"
                }
              ]
            },
            {
              "attrid": "1037",
              "title": "尺码",
              "param": [
                {
                  "paramid": "1476",
                  "title": "38"
                }
              ]
            }
          ]
        },
        {
          "gid": "767430600",
          "title": "雪兰黛2018春季新款高跟鞋尖头细跟性感鞋子女韩版透气纱网女单鞋 ",
          "amount": 1,
          "price": 280,
          "img": "//vueshop.glbuys.com/uploadfiles/1524556026.jpg",
          "checked": true,
          "freight": 10,
          "attrs": [
            {
              "attrid": "1034",
              "title": "颜色",
              "param": [
                {
                  "paramid": "1171",
                  "title": "肉色"
                }
              ]
            },
            {
              "attrid": "1037",
              "title": "尺码",
              "param": [
                {
                  "paramid": "1174",
                  "title": "36"
                }
              ]
            }
          ]
        }
      ]
    }
  }

  componentDidMount() {

  }

  onChange(index, checked) {
    console.log(checked, index)
  }


 

  render() {
    return (
      <div className={'page ' + styles['cart-page']}>
        <HeaderComponent title="购物车" />
        <div className={styles['cart-main']}>
          {
            this.state.cartList.map((item, index) => {
              return (
                <div className={styles['cart-list']} key={index}>
                  <CheckboxComponent style={{marginLeft:'.2rem',marginRight:'.3rem'}}  checked={item.checked} onChange={this.onChange.bind(this, index)} key={index} />
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
                        <div className={styles['btn'] + " " + styles['dec'] + " " + styles["active"]}>-</div>
                        <div className={styles['amount-input']}><input type="tel" value={item.amount} /></div>
                        <div className={styles['btn'] + " " + styles['inc']}>+</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default CartComponent;

