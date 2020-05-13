import React from 'react';
import HeaderComponent from '../../../components/headerComponent';
import styles from './index.module.scss';

class CenterComponent extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="page">
        <HeaderComponent title="个人中心" rightText="完成"/>
        <div className={styles['user-info-warp']}></div>
      </div>
    )
  }
}

export default CenterComponent;