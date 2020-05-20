import React, { Component } from 'react';
import {withRouter} from 'react-router';
import styles from './index.module.scss';

class Index extends Component {

  onLeftClick(){
    let leftClick = this.props.onLeftClick;
    if(leftClick && typeof leftClick === 'function'){
      leftClick();
    }else{
      this.props.history.goBack();
    }
  }

  onRightClick(){
    let rightClick = this.props.onRightClick;
    if(rightClick && typeof rightClick === 'function'){
      rightClick();
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

export default withRouter(Index);
