import React, { Component } from 'react';
import { Row, Col, Table, Icon } from 'antd';
import G2 from '@antv/g2';
import Card from '../components/card';
import ProjectSurroundMap from '../components/projectSurroundMap';
import './index.scss';
window.G2 = G2;
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      tabsArr: ['交通情况', '教育配套', '医疗配套'],
      point: {
        lng: '114.264346',//121.462478
        lat: '30.530457' //31.189464
      }
    }
  }

  componentDidMount() {

  }

  renderChart() {
    const data = [
      { item: '事例一', count: 40, percent: 0.4 },
      { item: '事例二', count: 21, percent: 0.21 },
      { item: '事例三', count: 17, percent: 0.17 },
      { item: '事例四', count: 13, percent: 0.13 },
      { item: '事例五', count: 9, percent: 0.09 }
    ];
    const chart = new G2.Chart({
      container: 'container',
      forceFit: true,
      height: 500,
      animate: false,
      //position: 'left',
      padding: [0, 0, 0, 15],
    });
    chart.source(data, {
      percent: {
        formatter: val => {
          val = (val * 100) + '%';
          return val;
        }
      }
    });
    chart.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6
    });
    chart.tooltip({
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    });
    // 辅助文本
    chart.guide().html({
      position: ['50%', '50%'],
      html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
      alignX: 'middle',
      alignY: 'middle'
    });

    const interval = chart.intervalStack()
      .position('percent')
      .color('item')
      .label('percent', {
        formatter: (val, item) => {
          return item.point.item + ': ' + val;
        }
      })
      .tooltip('item*percent', (item, percent) => {
        percent = percent * 100 + '%';
        return {
          name: item,
          value: percent
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });
    chart.legend({
      //position:'right-center',
      useHtml: true,
      containerTpl: '<div class="g2-legend" >'
        + '<h4 class="g2-legend-title"></h4>'
        + '<ul class="g2-legend-list"></ul>'
        + '</div>',
      itemTpl: '<li class="g2-legend-list-item item-{index} {checked}" data-color="{originColor}" data-value="{originValue}">' +
        '<i class="g2-legend-marker" style="background-color:{color};"></i>' +
        '<span class="g2-legend-text">{value}</span></li>'
    });
    chart.render();
    interval.setSelected(data[0]);

  }

  tabClickHandle(index) {
    this.setState({ activeIndex: index })
  }

  render() {
    return (
      <div>
        <ul className="surroun-tabs">
          {
            this.state.tabsArr.map((item, index) => {
              return (
                <li
                  className={this.state.activeIndex == index ? 'active' : ''}
                  onClick={this.tabClickHandle.bind(this, index)}
                  key={index}>
                  {item}
                </li>
              )
            })
          }
        </ul >
        <ProjectSurroundMap
          projectPointData={this.state.point}
          projectName="上海平安大厦"
          activeIndex={this.state.activeIndex}
        />
      </div >
    )
  }
}

