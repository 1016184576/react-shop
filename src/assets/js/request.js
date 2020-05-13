import axios from 'axios'

import { server_base_url } from './config'

export default function request(opts) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      //设置默认根地址
      baseURL: server_base_url,
      // 设置请求超时设置
      timeout: 6 * 1000,
      //设置请求时的header
      headers:{
          'Content-Type': 'application/json;charset=UTF-8'
      }
    });
    opts.url = opts.url + '?token=1ec949a15fb709370f';
    instance(opts)
      .then(res => {
        if (res.status === 200){
          resolve(res.data.data);
        }else{
          reject('请求失败');
        }
      })
      .catch(err => {
        reject('请求失败');
      })

  })
}