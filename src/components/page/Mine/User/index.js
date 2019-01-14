import React, { Component } from 'react'
import './index.scss'
import {GroupReg} from '../../../../modules/group'

class User extends Component {
    constructor(props){
        super(props) 
    }

    render(){
        return (
            <div>
                <section className="mine-user-box">
                    <div className="mine-user-box-t">
                        <div className="user-box-t-img">
                            <img src="https://static3.mescake.com/img/ucenter/user-img.png" alt="" />
                        </div>
                        <div className="user-box-t-text">
                            <span className="user-username">{this.props.userInfo.username}</span>
                            <a href="" id="editUserInfo" className="fr userBtn">编辑个人资料</a>
                        </div>
                    </div>
                    <ul className="mine-user-box-b">
                        <li>
                            <a href="#">
                                <span  className = "fa fa-reorder"></span>
                                我的订单
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span  className = "fa fa-coffee"></span>
                                我的福利社
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span  className = "fa fa-rmb"></span>
                                优惠券
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span  className = "fa fa-cc-paypal"></span>
                                礼品卡
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span  className = "fa fa-phone"></span>
                                客服电话
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span  className = "fa fa-pencil"></span>
                                意见反馈
                            </a>
                        </li>
                        
                    </ul>
                </section>
            </div>
        )
    }
}

export default  GroupReg(User)
