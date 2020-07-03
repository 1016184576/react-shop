import { action, observable } from 'mobx';
export default class Cart {
  @observable cartList = [
    {
      "gid": "143208071",
      "title": "高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带",
      "amount": 1,
      "price": 120.98,
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
  @observable total = 0; //总金额

  /**
   * 修改选中状态
   * @param {*} index 
   * @param {*} checked 
   */
  @action.bound onChange(checked, index) {
    this.cartList[index].checked = checked;
    this.setTotal();
  }

  /**
   * 修改全选状态
   * @param {*} checked 
   */
  @action.bound setAllChecked(checked) {
    this.cartList = this.cartList.map(item => {
      item.checked = checked;
      return item;
    })
    this.setTotal();
  }

  /**
   * 设置总金额
   */
  @action.bound setTotal() {
    this.total = this.cartList.reduce((total, curr) => {
      if (curr.checked) {
        total += curr.amount * curr.price;
      }
      return total;
    }, 0);
  }

  /**
   * 添加商品数量
   * @param {*} index 
   */
  @action.bound addAmount = index => {
    let { amount } = this.cartList[index];
    amount++;
    this.cartList[index].amount = amount;
    this.setTotal();
  }

  /**
   * 减少商品数量
   * @param {*} index 
   */
  @action.bound subAmount = index => {
    let { amount } = this.cartList[index];
    if (amount === 1) {
      return;
    }
    amount--;
    this.cartList[index].amount = amount;
    this.setTotal();
  }

}