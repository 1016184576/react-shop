import React, { Component } from 'react';
import { mathRand } from '../../utils';
import styles from './index.module.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentID: `checkbox${new Date().getTime()}${mathRand(4)}`,
    }
  }

  handleChange(e) {
    let checked = e.target.checked;
    let { onChange, index = 0 } = this.props;
    if (onChange && typeof onChange === 'function') {
      onChange(checked, index);
    }
  }

  render() {
    return (
      <div className={styles['shop-checkbox']} style={this.props.style}>
        <input type="checkbox"
          id={this.state.componentID}
          checked={this.props.checked}
          onChange={this.handleChange.bind(this)}
        />
        <label className={this.props.checked ? styles['checked'] : ''} htmlFor={this.state.componentID}>
          {
            this.props.labelText && <span>{this.props.labelText}</span>
          }
        </label>
      </div>
    )
  }
}

export default Index;
