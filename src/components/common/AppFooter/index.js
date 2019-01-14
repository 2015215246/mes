import React, { Component } from 'react'
import './index.scss'
import {Link,NavLink} from 'react-router-dom'

class AppFooter extends Component {
    constructor(props){
        super(props)
    }
    renderAppFooterNavs(){
        let {appFooterNavs} = this.props
        
        return (
            <ul>
                {appFooterNavs.map(item => {
                    return (
                        <li key = {item.id}>
                            <NavLink 
                            activeClassName = "active"
                            to = {{
                                pathname: item.path,
                            }}
                            exact = {item.exact}
                            >
                                <i className = {'fa fa-'+ item.icon}></i>
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        )
    }

    render(){
        return (
            <div className = "app-footer-box">
                {this.renderAppFooterNavs()}
            </div>
        )
    }
}

AppFooter.defaultProps = {
    appFooterNavs:[
        {
            id: 1,
            title: '首页',
            icon: 'home',
            path: '/',
            exact: true
        },
        {
            id: 2,
            title: '购物袋',
            icon: 'shopping-bag',
            path: '/shopcar'

        },
        {
            id: 3,
            title: '我的每实',
            icon: 'user-circle-o',
            path: '/mine'            
        },
    ]
}

export default  AppFooter
