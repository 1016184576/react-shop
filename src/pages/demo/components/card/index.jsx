import React, { Component } from 'react'
import './index.scss';

/**
 * titleIcon: 标题图片
 * title：    标题文本
 * rightButton: 头部右边模块内容
 */
export default class Index extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-header'>
          <div className='card-header-left'>
            <img src={this.props.titleIcon} alt=""/>
            <span>{this.props.title}</span>
          </div>
          <div className='card-header-right'>
            {
              this.props.rightButton
            }
          </div>
        </div>
        <div className='card-body'>
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}
