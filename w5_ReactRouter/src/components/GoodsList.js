import React from 'react';
import {withRouter} from 'react-router-dom'
import{Row,Col} from 'antd';
import PropTypes from 'prop-types'

const GoodsList = ({datalist,history,title})=>{

    return (
        <>
        {title ? <h4>{title}</h4> : null}
        <Row gutter={30}>
            {
                datalist.map(goods=>{
                    return <Col
                    key={goods.goods_id} 
                    style={{minHeight:280}}
                    xs={12}
                    sm={6}
                    md={4}
                    onClick={()=>{
                        history.push('/goods/'+goods.goods_id)
                    }}
                    >
                        <img src={goods.goods_image_url || goods.goods_image} style={{width:'100%'}}/>
                        <h5>{goods.goods_name}</h5>
                        <p className="price">
                            <del>{goods.goods_promotion_price}</del>
                            <span>{(goods.goods_promotion_price*0.8).toFixed(2)}</span>
                        </p>
                    </Col>
                })
            }
        </Row>
        </>
    )
}

GoodsList.propTypes = {
    datalist:PropTypes.array.isRequired,
    title:PropTypes.string
}

export default withRouter(GoodsList)