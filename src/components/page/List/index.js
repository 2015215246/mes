import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import {GroupList} from '../../../modules/group'


class List extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        let {getList} = this.props
        getList()
    }
    renderItem(){
        let {lists} = this.props
        return lists.map(item => { 
            return ( 
                <li key = {item.id}>
                    <Link
                        to = {{
                            pathname: '/detail',
                            search: `?id=${item.id}`
                        }}
                    >
                        <img src={item.cover.pc_cover} />
                    </Link>
                    <div className = "goodInfo">
                        <a>
                            <div className = "goodInfo-div">{item.name}</div>
                        </a>
                        <div className="home-list-price">
                            <span>
                                ￥
                                <em>{item.specs[0].price}</em>
                            </span>
                            <em className=" fa fa-plus-circle"></em>
                        </div>
                    </div>
                </li>
            )
        })
    }

    render(){
        return (
            <div className = "mes-list-box">
                <nav>
                    <ul>
                        <li>蛋糕</li>
                        <li>MINI杯</li>
                        <li>衍生品</li>
                    </ul> 
                </nav>
                <ul className = "list-box-ul">
                    {this.renderItem()}
                </ul>
            </div>
        )
    }

}

export default  GroupList(List)
