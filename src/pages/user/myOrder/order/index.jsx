import React, { Component } from 'react';
import { getUrlParams } from "../../../../utils";
import styles from './index.module.scss';

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    let params = getUrlParams(this.props.location.search);
    if (!params.status) return;
    console.log(params)
  }
  render() {
    return (
      <div>
        ordeer
      </div>
    )
  }
}

export default Index;