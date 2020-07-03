import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from './components/asyncComponent';

const HomeComponent = asyncComponent(() => import('./pages/home/home'));
const MyOrderComponent = asyncComponent(() => import('./pages/user/myOrder/index'));
const TransferComponent = asyncComponent(() => import('./pages/transfer'));
const DemoComponent = asyncComponent(() => import('./pages/demo/index'));


/*
HashRouter:有#号
BrowserRouter:没有#号
Route：设置路由与组件关联
Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break
Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由
Redirect:路由重定向WW
*/


class RouterComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/demo" component={DemoComponent}></Route>
            <Route path="/transfer" component={TransferComponent}></Route>
            <Route path="/order" component={MyOrderComponent}></Route>
            <Route path="/" component={HomeComponent}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default RouterComponent;
