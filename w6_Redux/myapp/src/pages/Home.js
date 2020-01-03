import React,{Component} from 'react';

import {withStorage} from '../utils/hoc';

import {Nsg} from '../api';

import { Carousel,Row,Col } from 'antd';
import GoodsList from '~/GoodsList';

@withStorage
class Home extends Component{
    constructor(){
        super();

        this.state = {
            recommend:[],
            datalist:[]
        }
        // this.goto = this.goto.bind(this);
    }
    
    goto = (id)=>{
        this.props.history.push('/goods/'+id)
    }

    async componentDidMount(){
    //    axios.get('https://www.nanshig.com/mobile/index.php?act=index').then(res=>{
    //        console.log('res:',res)
    //    })

       let data = await Nsg.get({
        act:'index'
       });

       console.log('res:',data);

    //    轮播图数据
       let recommend = data.datas[0].adv_list.item;

    //    商品分类数据
       let datalist = data.datas.slice(1).map(item=>item.goods);

       this.setState({
           recommend,
           datalist
       })
    }
    render(){
        let {recommend,datalist} = this.state;
        // this.props.user
        console.log('Home',this.props)
        return <div>

        <Carousel>
            {
                recommend.map(item=>{
                    return <img key={item.data} src={item.image}/>
                })
            }
        </Carousel>
        <div style={{padding:15}}>
            {
                datalist.map((item,idx)=>{
                    return (
                        <React.Fragment key={idx}>
                             {/* <h4>{item.title}</h4>
                           <Row gutter={[30,30]}>
                                {
                                    item.item.map((item,idx)=><Col key={item.goods_id} 
                                    span={12}
                                    // xs={12}
                                    // md={8}
                                    // xl={6}
                                    onClick={this.goto.bind(this,item.goods_id)}
                                    >
                                        <img src={item.goods_image} style={{width:'100%'}}/>
                                        <h5>{item.goods_name}</h5>
                                        <p className="price">
                                            <del>{item.goods_price}</del>
                                            <span>{(item.goods_promotion_price*0.8).toFixed(2)}</span>
                                        </p>
                                    </Col>)
                                }
                            </Row> */}
                            <GoodsList datalist={item.item} title={item.title}/>
                        </React.Fragment>
                    )
                })
            }
        </div>
        </div>
    }
}

// Home = withStorage(Home);

export default Home;