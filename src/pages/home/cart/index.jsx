import React from 'react';
import './index.scss';


class CartComponent extends React.Component {

  componentDidMount() {
    this.initChart()
  }

  initChart() {
  }

  render() {
    return (
      <div>
        <p>购物车</p>
        <div id="mountNode" style={{marginLeft: '100px'}}>
        </div>
      </div>
    )
  }
}

export default CartComponent;

