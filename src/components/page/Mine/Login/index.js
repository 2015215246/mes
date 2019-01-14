import React, { Component } from 'react'
import './index.scss'

import {GroupReg} from '../../../../modules/group'

class LoginByUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            flag: true,
            flag2: false,
            reg:false,
            color: "#fff"
        }
        this.fnl = this.fnl.bind(this)
        this.fnr = this.fnr.bind(this)
        this.reg = this.reg.bind(this)
        this.reg2 = this.reg2.bind(this)
        this.regnumber = this.regnumber.bind(this)
        this.submit = this.submit.bind(this)
    }
    regnumber(){
        let username = this.user.value;
        let password = this.pass.value;
        let obj = {
            username,
            password
        }
        console.log(username,password);
        let {getregnumber} = this.props;
        getregnumber(obj)
    }
    submit(e){
        // this.checkUserInfo()
        e.preventDefault()
        let {login} = this.props;
        let {push} = this.props.history;
        console.log(this.Context);
        login({
            username : this.username.value,
            password : this.password.value,
            success(){
                console.log('登陆成功');
                push('/mine/user')
            },
            fail(){
                console.log('登陆失败');
                push('/mine/login')
            }
        })
    }
    fnl(){
        this.setState({
            flag: true,
            flag2: false,
            reg:false,
        })   
    }
    fnr(){
        this.setState({
            flag: false,
            flag2: true,
            reg:false,
        })   
    }
    reg(){
        this.setState({
            flag: false,
            flag2: false,
            reg: true,
        })   
    }
    reg2(){
        this.setState({
            flag: false,
            flag2: true,
            reg: false,
        })   
    }

    render(){
        return (
            <div className = 'login-by-user-box' style = {{background:this.state.color}}>
                <section className = 'login-nav'>
                    <nav>
                        <ul>
                            <li onClick = {this.fnl}>验证码登录</li>
                            <li onClick = {this.fnr}>账号登录</li>
                        </ul>
                    </nav>
                    <div className = 'login-nav-btn' style={{left: this.state.flag ? "0" : "50%"}}>
                        <span></span>
                    </div>
                </section>
                <section className = 'login-content' >
                
                    <div className = "auth-content" style={{display: this.state.flag ? "block" : "none"}}>
                        <div className='auth-loginItem'>
                            <div className = "numbCode">+86</div>
                            <input placeholder = "请输入手机号" className = "auth-user-phone"></input>
                        </div>
                        <div className='auth-loginItem'>
                            <input placeholder = "输入验证码" className = "auth-password-phone"></input>
                            <input placeholder = "获取验证码" className = "auth-password-gain" ></input>
                        </div>
                        <button className="auth-btn">登录</button>
                    </div>
                    <div className = "number-content" style={{display: this.state.flag2 ? "block" : "none"}}>
                        <div className="number-content-user">
                            <input placeholder = "请输入账号" ref = {el => this.username = el}></input>
                        </div>
                        <div className="number-content-user">
                            <input placeholder = "输入密码" ref = {el => this.password = el}></input>
                        </div>
                        <div className="number-content-word">
                            <a className = "number-content-l" onClick = {this.reg}>注册账号</a>
                            <a className = "number-content-r">忘记密码</a>
                        </div>
                        <button className="auth-btn" onClick = {this.submit}>登录</button>
                    </div>
                    <div className = "reg-content" style={{display: this.state.reg ? "block" : "none"}}>  
                        <div className='reg-loginItem'>
                            <div className = "reg-numbCode">+86</div>
                            <input placeholder = "请输入手机号" className = "reg-user-phone" ref = {el => this.user = el}></input>
                        </div>
                        <div className='reg-loginItem'>
                            <input placeholder = "输入验证码" className = "reg-password-phone"></input>
                            <input placeholder = "获取验证码" className = "reg-password-gain" ></input>
                        </div>
                        <div className="reg-content-user">
                            <input placeholder = "输入密码" ref = {el => this.pass = el}></input>
                        </div>
                        <div className = "reg-number">
                            <a href= "#" onClick = {this.reg2}>已有账号?点击登录</a>
                        </div>
                        <button className="reg-btn" onClick={this.regnumber}>注册</button>
                    </div>
                </section>
            </div>
        )
    }

}

export default  GroupReg(LoginByUser)
