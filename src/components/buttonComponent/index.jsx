import React, { Component } from 'react';
import styles from './index.module.scss';

export default class Index extends Component {

    handleClick(){
        let onClick = this.props.onClick;
        if(onClick && typeof onClick === 'function'){
            onClick();
        }
    }

    getWidth(){
        return this.props.width ? this.props.width : '85%';
    }

    render() {
        return (
            <div className={styles['button']} style={{width: this.getWidth()}} onClick={this.handleClick.bind(this)}>
                {this.props.buttonText}
            </div>
        )
    }
}
