import React, { Component } from 'react';
import {withRouter} from 'react-router';
import styles from './index.module.scss';

class index extends Component {

  onLeftClick(){
    if(this.props.onLeftClick && typeof this.props.onLeftClick === 'function'){
      this.props.onLeftClick();
    }else{
      this.props.history.goBack();
    }
  }

  onRightClick(){
    if(this.props.onRightClick && typeof this.props.onRightClick === 'function'){
      this.props.onRightClick();
    }
  }

  render() {
    return (
      <div className={styles["header"]}>
        <div className={styles["back"]} onClick={this.onLeftClick.bind(this)}></div>
        <div className={styles["title"]}>{this.props.title}</div>
        <div className={styles["right-text"]} onClick={this.onRightClick.bind(this)}>{this.props.rightText}</div>
      </div>
    )
  }
}

export default withRouter(index);
