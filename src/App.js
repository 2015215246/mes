import React, { Component } from 'react';

import { Home,List,ShopCar,Mine,Detail } from './components/page'

import { Route,Switch,withRouter } from 'react-router-dom'
import AppFooter from './components/common/AppFooter/index'
import AppHeader from './components/common/AppHeader/index'

import {GroupReg} from './modules/group'
import { Toast} from 'antd-mobile';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasFooter: true
    }
  }
  renderRoutes(){
    let {routes} = this.props
    return routes.map(item =><Route key = {item.id} path = {item.path} component = {item.component} exact = {item.exact}/>)               
  }
  render() {
    let {hasFooter} = this.state
    return (
      <div className="App">
          {/* <AppHeader /> */}
          {this.renderRoutes()}
          {!hasFooter || <AppFooter />}
      </div>
    );
  }
  // componentWillMount(){
  //   let {pathname} = this.props.location
  //   let arr = ['/mine','/list']
  //   if( arr.indexOf(pathname) > -1 ){
  //     this.setState({
  //       hasFooter: false
  //     })
  //   }else{
  //     this.setState({
  //       hasFooter: true
  //     })
  //   }
  // }
  componentWillMount(){
    let {getUserName} = this.props
    let username = localStorage.getItem('username')?localStorage.getItem('username'): ''
    getUserName(username)
 
    let {pathname} = this.props.location
    let arr = ['/mine/login','/detail','/shopcar']
    if( arr.indexOf(pathname) > -1 ){
      this.setState({
        hasFooter: false
      })
    }else{
      this.setState({
        hasFooter: true
      })
    }
  }
  componentWillReceiveProps(props){
    let {pathname} = props.location
    let arr = ['/mine/login','/detail','/shopcar']
    if( arr.indexOf(pathname) > -1 ){
      this.setState({
        hasFooter: false
      })
    }else{
      this.setState({
        hasFooter: true
      })
    }
    let username = getUser();
    let {push} = this.props.history
    if(pathname === '/shopcar'){
      if(username == ""){
        Toast.info("请先登录",2)
        setTimeout(() => {
          push("/mine/login")
        },2000)
      }
    }
  }
}

App.defaultProps = {
  routes: [
    {
      id: 1,
      path: '/',
      component: Home,
      exact: true
    },
    {
      id: 2,
      path: '/list',
      component: List
    },
    {
      id: 3,
      path: '/shopcar',
      component: ShopCar
    },
    {
      id: 4,
      path: '/mine',
      component: Mine
    },
    {
      id: 5,
      path: '/detail',
      component: Detail
    }
  ]
}

function getUser(){
  return JSON.parse(localStorage.username ? localStorage.username : '[]')
}

export default withRouter(GroupReg(App));
