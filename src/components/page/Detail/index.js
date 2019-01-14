import React, { Component } from 'react'
import {GroupDetail} from '../../../modules/group'
import {GroupCars} from '../../../modules/group'
import { Carousel, WingBlank } from 'antd-mobile';
import './index.scss'
import {Toast} from 'antd-mobile'
import Swiper from 'swiper'
 
import 'swiper/dist/css/swiper.min.css'


const qs = require('querystring')

class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
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
    addCar(detailData){
        let goodInfo = {
            id : detailData.id,
            name : detailData.name,
            price : detailData.specs[0].price,
            num: 1,
            img:detailData.cover.pc_cover
        }
        let {addCar} = this.props
        addCar(goodInfo,() =>{
            Toast.info('加入成功',1)
        })
    }

    componentWillMount(){
        let {getDetail} = this.props
        let { search } = this.props.location
        let urlObj =qs.parse(search.slice(1))
        getDetail(urlObj.id) 
        this.total()
        
    }

    componentWillReceiveProps(){
        setTimeout(() => {
            new Swiper(this.Banner,{
                autoplay : true,
                loop: true
            })
        })
        this.total()
    }
    

    renderItemBanner(){
        let banners = getBanners();
        if(banners){
            return banners.map((item) => {
                return (
                    <div className="swiper-slide" key = {item.id}>
                        <img src = {item.pc_picture} />
                    </div>
                ) 
            })
        }
    }

    renderItem(){
        let { detailData } = this.props
        if(detailData){
            return(
                <div>
                {/* <div className="mes-detail-swiper">
                    <img src={detailData.cover.pc_cover}/>
                </div> 
                 */}

                <div className = "mes-detail-price">
                    <p className="title">{detailData.name}</p>
                    <p className="price"> {detailData.specs[0].price}</p>
                    <div>一套</div>
                </div> 
                <div className="mes-detail-box-img">
                    <img src={detailData.wap_pictures[1].wap_picture}/>
                    <img src={detailData.wap_pictures[2].wap_picture}/>
                </div>  
                <ul>
                    <li className="car fa fa-cart-plus">
                        <a href="/shopcar" >
                            <span>
                                {this.state.totalNum}
                            </span>
                        </a>
                    </li>
                    <li className="add" onClick = {this.addCar.bind(this,detailData)}>
                        加入购物车
                    </li>
                    <li className="buy">
                        立即购买
                    </li>
                </ul>         
            </div>   
            ) 
        }
    }
           
    render(){
        let {replace} = this.props.history
        
        return (
            <div className="mes-detail-box">
                <header>
                    <a href="#">
                        <span 
                            onClick = {()=>{
                                replace('/')
                            }}
                        className="fa fa-angle-left"></span>
                        <em>Back</em>
                    </a>
                    <h2>商品详情</h2>
                </header>
                <div className="swiper-container" ref = {el => this.Banner = el}>
                    <div className="swiper-wrapper">
                        {this.renderItemBanner()}
                    </div>
                    <div className="swiper-pagination"></div>
                 </div>
                
                {this.renderItem()}
            </div>
        )
        
    }

}

function getBanners(){
    return JSON.parse(localStorage.banners ? localStorage.banners : '[]')
}

export default  GroupCars(GroupDetail(Detail))
