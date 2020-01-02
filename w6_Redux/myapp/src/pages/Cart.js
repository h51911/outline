import React,{Component} from 'react';

import { Steps,Divider,List,Col,Row,InputNumber,Icon,Tooltip,Button} from 'antd';

import {connect} from 'react-redux';

const mapStateToProps = state=>({
    cartlist:state.cartlist,
    totalPrice:state.cartlist.reduce((prev,item)=>prev+item.goods_price*item.goods_qty,0)
})
@connect(mapStateToProps)
class Cart extends Component{
    state = {
        
    }

    changeQty = (id,qty)=>{
        // let {goodslist} = this.state;
        // goodslist = goodslist.map(item=>{
        //     if(item.goods_id === id){
        //         item.goods_qty = qty;
        //     }
        //     return item;
        // })
        // this.setState({
        //     goodslist
        // })

        this.props.dispatch({
            type:'change_qty',
            payload:{
                goods_id:id,
                goods_qty:qty
            }
        })
    }

    removeItem = (id)=>{
        // let {goodslist} = this.state;
        // goodslist = goodslist.filter(item=>item.goods_id!=id);
        // this.setState({
        //     goodslist
        // })
        this.props.dispatch({
            type:"remove_from_cart",
            payload:id
        })
    }

    clearCart = ()=>{
        // this.setState({
        //     goodslist:[]
        // })

        this.props.dispatch({
            type:"clear_cart"
        })
    }

    render(){
        let {cartlist,totalPrice,history} = this.props
        return <div className="pd">
            <Steps current={0} size="small">
                <Steps.Step title="购物车" description="Shopping cart" />
                <Steps.Step title="结算" description="go to pay" />
                <Steps.Step title="支付成功" description="Payment Success" />
            </Steps>
            <Divider/>

            <List
            itemLayout="horizontal"
            dataSource={cartlist}
            renderItem={item => (
                <List.Item
                    actions={[
                        <Tooltip title="删除商品">
                            <Icon type="close" style={{color:'#f00'}} onClick={this.removeItem.bind(this,item.goods_id)}/>
                        </Tooltip>
                    ]}
                    >
                    <List.Item.Meta
                        avatar={<img src={item.goods_image} style={{width:100}} onClick={
                            ()=>{
                                history.push('/goods/'+item.goods_id)
                            }
                        } />}
                        title={item.goods_name}
                        description={<div className="price">
                            <span style={{marginRight:5}}>{item.goods_price}</span> 
                            &times;
                            <InputNumber 
                            size="small" 
                            min={1} 
                            max={10} 
                            value={item.goods_qty} 
                            onChange={this.changeQty.bind(this,item.goods_id)}
                            style={{width:50,marginLeft:5}}
                                />
                        </div>}
                    />
                </List.Item>
            )}
        />
        <Divider />
        <Row>
            <Col span={8}>
                <Button type="danger" icon="delete" onClick={this.clearCart}>清空购物车</Button>
            </Col>
            <Col span={16} style={{textAlign:'right'}}>
            总价：<span className="price" style={{marginRight:20}}><span>{totalPrice.toFixed(2)}</span></span><Button type="primary" size="large">结算</Button>
            </Col>
        </Row>
        </div>
    }
}

// const mapStateToProps = state=>({
//     cartlist:state.cartlist
// })
// Cart = connect(mapStateToProps)(Cart);

export default Cart;