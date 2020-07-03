import React, { Component } from 'react'
import './index.scss';

const keywordArr = ["地铁", "公交", "交通", "学校", "医院"];
const radius = 3000;
const BMap = window.BMap;

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.initMap();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeIndex !== nextProps.activeIndex) {
      this.changeMapMarker(nextProps.activeIndex);
    }
  }

  /**
   * 初始化地图
   */
  initMap() {
    let self = this;
    self.markerList = [];           //标记点数组
    self.surroundMarkerList = [];   //周边信息列表
    // 百度地图API功能
    self.map = new BMap.Map(this.refs.map); // 创建Map实例
    const { projectPointData, projectName } = this.props;
    self.centerPoint = new BMap.Point(projectPointData.lng, projectPointData.lat);
    self.map.centerAndZoom(self.centerPoint, 14); // 初始化地图
    self.map.enableScrollWheelZoom(true);
    //添加中心点标记
    self.addMarker(
      self.centerPoint,
      require("./images/center-icon.png"),
      1,
      projectName,
      true
    );
    self.addCircle(self.centerPoint);
    self.localSearchInfo();
  }

  /***
     * 根据关键词搜索周边信息
     */
  localSearchInfo() {
    let self = this;
    let localSearch = new BMap.LocalSearch(self.centerPoint, {
      pageCapacity: 10,
      onSearchComplete: LocalResult => {
        console.log(LocalResult)
        let tempArr = [];
        let getResultArr = obj => obj.Qq || obj.Yq;
        //把地铁，公交，交通合并交通情况数组
        let trafficArr = getResultArr(LocalResult[0]);
        trafficArr = trafficArr.concat(getResultArr(LocalResult[1]), getResultArr(LocalResult[2]));
        if (trafficArr.length > 10) trafficArr = trafficArr.slice(0, 10);
        tempArr.push(trafficArr);
        tempArr.push(getResultArr(LocalResult[3]));
        tempArr.push(getResultArr(LocalResult[4]));
        console.log(tempArr)
        self.surroundMarkerList = tempArr;
        self.addSurroundMarker(require("./images/marker-icon.png"), self.props.activeIndex);

      }
    });
    localSearch.searchNearby(keywordArr, self.centerPoint, radius);
  }

  /**
   * 添加标记
   */
  addMarker(point, iconUrl, markerLabel, content, centerMarkerBool) {
    let self = this;
    let marker = new BMap.Marker(point, {
      offset: new BMap.Size(0, -18),
      icon: new BMap.Icon(iconUrl, new BMap.Size(26, 37))
    });
    if (!centerMarkerBool) {
      self.markerList.push(marker);
    }
    if (markerLabel) {
      let label = new BMap.Label(markerLabel, {
        offset: new BMap.Size(Number(markerLabel) > 9 ? 6 : 8, 5)
      });
      label.setStyle({
        color: "#fff",
        background: "none",
        border: "none"
      });
      marker.setLabel(label);
    }
    marker.addEventListener("click", e => {
      self.openWindow(content, e);
    });
    self.map.addOverlay(marker);
  }

  /**
   * 添加圆形遮罩
   */
  addCircle(point, config = {}) {
    let circleOpt = {
      strokeColor: "#A4C3FF",
      strokeWeight: 1,
      strokeOpacity: 0.5,
      fillColor: "#A4C3FF",
      fillOpacity: 0.5
    };
    circleOpt = Object.assign({}, circleOpt, config);
    let circle = new BMap.Circle(point, radius, circleOpt);
    circle.addEventListener('click', e => {
      this.map.closeInfoWindow();
    })
    this.map.addOverlay(circle);
  }

  /**
   * 添加周边标记 
   */
  addSurroundMarker(iconUrl, activeIndex) {
    this.surroundMarkerList[activeIndex].map((item, index) => {
      let point = new BMap.Point(item.point.lng, item.point.lat);
      this.addMarker(point, iconUrl, index + 2, item.title);
      //console.log(item.title)
    });
  }

  /**
   * 打开信息窗口
   */
  openWindow(content, e) {
    let p = e.target;
    let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    console.log(content);
    let infoWindow = new BMap.InfoWindow(content, {
      width: 0, // 信息窗口宽度
      height: 0, // 信息窗口高度
      enableMessage: true, //设置允许信息窗发送短息
      title: "",
      offset: new BMap.Size(0, -16)
    }); // 创建信息窗口对象
    this.map.openInfoWindow(infoWindow, point); //开启信息窗口
  }

  /**
   * 改变地图周边标记
   * @param {*} index 
   */
  changeMapMarker(activeIndex) {
    this.markerList.map(item => {
      this.map.removeOverlay(item);
    });
    this.markerList = [];
    this.addSurroundMarker(require("./images/marker-icon.png"), activeIndex);
  }

  render() {
    return (
      <div className="map-container">
        <div className="map" ref="map"></div>
      </div>
    )
  }
}
