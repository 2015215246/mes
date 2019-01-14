import React, { Component } from 'react'
import './index.scss'
// import {GroupUser} from './../../../modules/group';
import {GroupReg} from '../../../modules/group'
import Login from './Login'
import User from './User'

import {Route} from 'react-router-dom'

class Mine extends Component {
    constructor(props){
        super(props)
        // this.login = this.login.bind(this)
     
    }
    componentWillMount(){
        this.checkUserInfo()
    }
    // componentWillReceiveProps(props){
    //    let { pathname } = props.location
    //    if (pathname === this.props.location.pathname){
    //        this.checkUserInfo(props)
    //    }
    // }
    // componentWillUpdate(){
    //     let {go} = this.props.history
        
    // }
    checkUserInfo(props){
        let {userInfo} = this.props
        let {replace} = this.props.history
        if( userInfo.username){
            replace('/mine/user')
        }else{
            replace('/mine/login')
        }
    }
    // login(props){
    //     let val = this.el.value;
    //     let {login} = this.props
    //     login(val) 
    // }
    render(){
        return (
            <div className = "mes-mine-box">
                {/* <button onClick = {this.login}>登录</button>
                <input ref = {el => this.el =el} type = 'text'/> */}
                <Route path = '/mine/login' component = {Login}/>
                <Route path = '/mine/User' component = {User}/>
            </div>
        )
    }

}

export default  GroupReg(Mine)
