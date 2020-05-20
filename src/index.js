import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import store from './store/store'
import './assets/scss/common/style.scss'

configure({ enforceActions: 'observed' });

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise {
  constructor(callback) {
    let self = this;
    self.state = PENDING;
    self.value = undefined;
    self.reason = undefined;

    let resolve = value => {
      if (self.state === PENDING) {
        self.state = FULFILLED;
        self.value = value;
      }
    }

    let reject = reason => {
      if (self.state === PENDING) {
        self.state = REJECTED;
        self.reason = reason;
      }
    }

    try {
      callback(resolve, reject);
    } catch (error) {
      reject(error);
    }

  }

  then(onFulfilled, onRejected) {
    let self = this;
    if (self.state === FULFILLED) {
      onFulfilled(self.value);
    } else if (self.state === REJECTED) {
      onRejected(self.reason);
    }
  }
}

let flag = false;

let promise = new MyPromise((resolve, reject) => {
  if (flag) {
    resolve({ data: [], msg: '请求成功' });
  } else {
    reject('请求失败');
  }
});

promise.then(res => {
  console.log(res)
}, reason => {
  console.log(reason)
})