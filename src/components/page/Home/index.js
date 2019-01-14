import React, { Component } from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
import HomeList from './HomeList'

class Home extends Component {
    constructor(props){
        super(props)
    }

    renderAppHomeNavs(){
        let {appHomeNavs} = this.props
        return (
            <ul className = 'home-ul-navs'>
                {appHomeNavs.map(item => {
                    return (
                        <li key = {item.id}>
                            <NavLink 
                            to = {{
                                pathname: item.path,
                            }}
                            exact = {item.exact}
                            >
                                <i className = {'fa fa-'+ item.icon}></i>
                                <p>{item.title}</p>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        )
    }

    render(){
        return (
            <div className = "mes-home-box">
                <header>
                    <img src="https://static3.mescake.com/img/common/logo2.png" className = "mes-home-box-logo"/>
                    <div className="mes-home-box-r">
                        <img src="https://static3.mescake.com/img/common/position2.png" />
                        <p>北京</p>
                    </div>
                </header>
                <div className="mes-home-box-map">
                    <a href="">
                        <img src="https://static1.mescake.com/mobile/lunbo/slider-135.jpg" />
                    </a>
                </div>
                {this.renderAppHomeNavs()}  
                <HomeList />  
                <a href="/list" className="mes-home-more">查看更多蛋糕</a>        
            </div>
        )
    }

}
Home.defaultProps = {
    appHomeNavs:[
        {
            id: 1,
            title: '蛋糕',
            icon: 'birthday-cake',
            path: '/list',
            exact: true
        },
        {
            id: 2,
            title: 'MINI杯',
            icon: 'glass',
            path: ''

        },
        {
            id: 3,
            title: '衍生品',
            icon: 'hand-o-right',
            path: ''            
        },
    ]
}

export default  Home
