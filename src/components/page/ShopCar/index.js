import React, { Component } from 'react'
import './index.scss'
import {GroupCars} from '../../../modules/group'
import { Toast} from 'antd-mobile';


class ShopCar extends Component {
    constructor(props){
        super(props)
        this.state = {
            // totalNum: 0,
            totalPrice: 0,
            totalNum: 0
        }
    }
    total(){
        let {cars} = this.props
        if(cars.length){
            this.state.totalNum = 0
            this.state.totalPrice = 0
            cars.map((item) => {
                this.state.totalPrice += (item.num*item.price)
                this.state.totalNum += item.num
            })
            this.setState({})
        }
    }

    componentWillMount(){
        this.total()
    }
    componentWillReceiveProps(){
        this.total()
    }

    add(goodInfo){
        console.log(goodInfo);
        // let val = goodInfo.num + 1
        let {addCar} = this.props
        // if(val - goodInfo.num > 0){
            let good = {
                id : goodInfo.id,
                name : goodInfo.name,
                price : goodInfo.price,
                img : goodInfo.img,
                num : 1
            }
            addCar(good,() => {
                Toast.info('加入一条成功',1)
            })
        // }
        
        // item.num--;
        // console.log(item); 
    }
    
    minus(goodInfo){
        let {minusCar} = this.props
        if(goodInfo.num == 1){
            
            minusCar(goodInfo.id,() => {
                Toast.info('商品已删除',1)
            })
        }else{
            minusCar(goodInfo.id,() => {
                Toast.info('减去一条成功',1)
            })
        }
        
    }

    renderItem(){
        let  cars  = getCars()
        if(cars.length != 0){
            return cars.map((item) => {
                return(
                    <li key={item.id}>
                        <div className = "car-commodity">
                            <a>
                                <img src = {item.img}/>
                            </a>
                            <div className="shoppingInfo">
                                <div className="shoppingInfo-t">
                                    <p className="shoppingInfo-t-name">{item.name}</p>
                                    <p className="shoppingInfo-t-free">每件含5套免费餐具</p>
                                </div>
                                <div className="shoppingInfo-b">
                                <p className = "shoppingInfo-b-price">￥<span>{item.price}</span></p>
                                    <div className="shoppingInfo-num">
                                        <span className="shoppingInfo-minus fa fa-minus-circle" onClick = {this.minus.bind(this,item)}></span>
                                        <span className="shoppingInfo-nums">{item.num}</span>
                                        <span className="shoppingInfo-add fa fa-plus-circle" onClick = {this.add.bind(this,item)}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className = "car-sign"></div> */}
                    </li>
                    
                )
            })
        }
    }

    render(){
        let {replace} = this.props.history
        return (
            <div className = "mes-shopcar-box">
                <header>
                    <a href="#">
                        <span 
                            onClick = {()=>{
                                replace('/')
                            }}
                        className="fa fa-angle-left"></span>
                        <em>Back</em>
                    </a>
                    <h2>购物车</h2>
                </header>
                <ul>
                    {this.renderItem()} 
                </ul>
                <div className="shopcar-total-box">
                    <div className="shopcar-total">
                        ￥
                        <span>{this.state.totalPrice}</span>
                    </div>
                    <a className="shopcar-clearing">结算</a>
                </div>
                    
            </div>
        )
    }

}

function getCars(){
    return JSON.parse(localStorage.cars ? localStorage.cars : '[]')
}

export default  GroupCars(ShopCar)
