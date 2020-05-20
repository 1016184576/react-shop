import React, { Component } from 'react';
import { mathRand } from '../../utils';
import styles from './index.module.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentID: `checkbox${new Date().getTime()}${mathRand(4)}`,
      checked: this.props.checked ? true : false,
    }
  }

  handleChange(e) {
    let checked = e.target.checked; 
    let onChange = this.props.onChange;
    if (onChange && typeof onChange === 'function') {
      onChange(checked);
      this.setState({checked});
    }
  }

  render() {
    return (
      <div className={styles['shop-checkbox']} style={this.props.style}>
        <input type="checkbox" id={this.state.componentID} onChange={this.handleChange.bind(this)} />
        <label className={this.state.checked ? styles['checked'] : ''} htmlFor={this.state.componentID}>
          {
            this.props.labelText && <span>{this.props.labelText}</span>
          }
        </label>
      </div>
    )
  }
}

export default Index;
