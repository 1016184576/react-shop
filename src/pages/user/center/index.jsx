import React from 'react';
import { inject, observer } from 'mobx-react';
import { Chart } from '@antv/g2';
import './index.scss';

@inject('counter')
@observer
class CenterComponent extends React.Component {
  componentDidMount() {
    this.renderChart();
  }

  renderChart() {
    const data = [
      { year: '1951 年', sales: 38 },
      { year: '1952 年', sales: 52 },
      { year: '1956 年', sales: 61 },
      { year: '1957 年', sales: 145 },
      { year: '1958 年', sales: 48 },
      { year: '1959 年', sales: 38 },
      { year: '1960 年', sales: 38 },
      { year: '1962 年', sales: 38 },
    ];

    let chart = new Chart({
      container: 'c1',
      autoFit: false,
      width: 800,
      height: 600,
    });

    chart.data(data);

    chart.scale('year', {
      formatter: val => val.replace(' 年', '')
    });

    chart.scale('sales', {
      ticks: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 20],
      formatter: val => `￥${val}`
    });

    chart.axis('sales', {
      title: {},
    });

    chart.interval().position('year*sales');

    chart.render();
  }

  render() {
    return (
      <div>
        个人中心
        <div id="c1" style={{ marginLeft: '100px' }}></div>
      </div>
    )
  }
}

export default CenterComponent;