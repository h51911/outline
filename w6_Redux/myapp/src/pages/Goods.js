import React, { Component } from 'react';
import{Icon,Button,Row,Col} from 'antd'
import Api from '@/api';
import Goodslist from '~/GoodsList'
import './Goods.scss';
import {connect} from 'react-redux';
import store from '../store';

let Styles = {
    mt:{
        marginTop:20
    },
    pd:{
        padding:15
    }
}

class Goods extends Component {
    // 
    state = {
        data:{},
        commedList:[]
    }

    // 给实例添加方法
    goto = (id)=>{
        this.props.history.push('/goods/'+id);
    }

    getData = async ()=>{
        let { id } = this.props.match.params;

        // 发起ajax请求获取当前商品数据
        // ?
        let data = await Api.get({
            act: 'goods',
            op: 'goods_detail',
            goods_id: id,
        });

        console.log(data)

        let { goods_image, goods_info,goods_commend_list} = data.datas;
        this.setState({
            data: {
                ...goods_info,
                goods_image
            },
            commedList:goods_commend_list
        })
    }

    addToCart = ()=>{
        let {cartlist,dispatch} = this.props;
        let {goods_id,goods_name,goods_price,goods_image} = this.state.data;
        let has = cartlist.filter(item=>item.goods_id===goods_id)[0];

        // 已经添加过的商品：数量+1
        if(has){
            dispatch({
                type:'change_qty',
                payload:{
                    goods_id,
                    goods_qty:has.goods_qty+1
                }
            })
        }else{
            let action = {
                type:'add_to_cart',
                payload:{
                    // 商品信息
                    goods_id,
                    goods_name,
                    goods_price,
                    goods_image,
                    goods_qty:1
                }
            }
            dispatch(action);

        }
    }

    buyNow = ()=>{
        this.addToCart();
        this.props.history.push('/cart');
    }

    // 给原型添加方法
    componentDidMount() {
        
        this.getData()
        
    }
    componentDidUpdate(prevProps,prevState){console.log('componentDidUpdate')
        // 在componentDidUpdate中进行数据修改/请求，必须有判断条件，避免进入死循环
        if(prevProps.match.params.id != this.props.match.params.id){
            console.log('getData')
            this.getData();
        }
    }
    render() {console.log('Goods',this.props)
        let {data,commedList} = this.state;
        return <div>
            <div className="img-container">
                <img src={data.goods_image} />
                <Icon type="heart" style={{ fontSize: 30, color: '#f00' }} />

                <Icon
                    className="btnBack"
                    type="arrow-left"
                    style={{ fontSize: 30, color: '#f00' }}
                    onClick={() => {
                        this.props.history.goBack();
                    }} />
            </div>
            <div style={Styles.pd}>
                <h1>{data.goods_name}</h1>
                <p className="price">
                    <del>{data.goods_price}</del>
                    <span>{(data.goods_promotion_price * 0.8).toFixed(2)}</span>
                </p>
                <Button.Group>
                    <Button icon="shopping-cart" size="large" onClick={this.addToCart}>添加到购物车</Button>
                    <Button icon="shopping" type="danger" size="large" onClick={this.buyNow}>立即购买</Button>
                </Button.Group>
            </div>
            
            {/* 推荐列表 */}
            <div style={Styles.pd}>
                {/* <h4 style={Styles.mt}>推荐列表</h4> */}
                {/* <Row gutter={30}>
                {
                    commedList.map(goods=>{
                        return <Col
                        key={goods.goods_id} 
                        style={{minHeight:280}}
                        xs={12}
                        sm={6}
                        md={4}
                        onClick={this.goto.bind(this,goods.goods_id)}
                        >
                            <img src={goods.goods_image_url} style={{width:'100%'}}/>
                            <h5>{goods.goods_name}</h5>
                            <p className="price">
                                <del>{goods.goods_promotion_price}</del>
                                <span>{(goods.goods_promotion_price*0.8).toFixed(2)}</span>
                            </p>
                        </Col>
                    })
                }
            </Row> */}
            <Goodslist datalist={commedList} title="推荐列表"/>

            </div>
        </div>
    }
}
const mapStateToProps = state=>({
    cartlist:state.cartlist
})
const mapDispatchToProps = dispatch=>({
    dispatch
})
Goods = connect(mapStateToProps,mapDispatchToProps)(Goods);

export default Goods;