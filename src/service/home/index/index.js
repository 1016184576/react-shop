import request from '../../../assets/js/request'

const API_CONFIG = {
  getSlideApi: '/home/index/slide'
}

/**
 * 获取首页banner数据
 * @param {String} url 
 */
export function getSlideList() {
  return request({
    type: 'get',
    url: API_CONFIG.getSlideApi
  })
}