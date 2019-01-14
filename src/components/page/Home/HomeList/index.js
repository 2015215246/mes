import React, { Component } from 'react'
import './index.scss'
import {GroupHomeList} from '../../../../modules/group'

class HomeList extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        let {getHomeList} = this.props
        getHomeList()
    }
    renderItem(){
        let {lists} = this.props
        return lists.map(item => { 
            return (
                
                    <li key = {item.id}>
                       <a>
                           <img src={item.cover.pc_cover} />
                       </a>
                       <div className = "goodInfo">
                            <a>
                                <div className = "goodInfo-div">{item.name}</div>
                            </a>
                            <div className="home-list-price">
                                <span>
                                    ￥
                                    <em>138</em>
                                </span>
                                <em className=" fa fa-plus-circle"></em>
                            </div>
                       </div>
                    </li>
                
            )
        })
    }
    // http://www.33cake.com/ServicesInterface/CakeHandler.ashx?action=GetProductAllList&cp=cp&nowNum=1&pageCount=20
    render(){
        return (
            <div className = "mes-home-list-box">
                <ul>
                    {this.renderItem()}
                </ul>     
            </div>
        )
    }

}

export default  GroupHomeList(HomeList)
