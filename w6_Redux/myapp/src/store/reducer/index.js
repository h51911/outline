// State：初始数据
let initState = {
    totalPrice:100,
    cartlist:[{
        goods_id: "1",
        goods_name: "huawei mate30 pro",
        goods_image:
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266619174795164_240.jpg",
        goods_price: 5998,
        goods_qty: 8
    },
    {
        goods_id: "2",
        goods_name: "xiaomi9",
        goods_image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
        goods_price: 2999,
        goods_qty: 2
    },
    {
        goods_id: "3",
        goods_name: "onePlus9 pro",
        goods_image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
        goods_price: 3999,
        goods_qty: 1
    }]
}

// Reducer：修改state的方法（重要：在redux中修改state方式：重写并覆盖）
const reducer = function(state=initState,{type,payload}){
    // 修改state的代码
    switch(type){

        // 添加商品
        case 'add_to_cart':
            return {
                ...state,
                cartlist:[payload,...state.cartlist]
            }
    
        // 删除商品：{type:'remove_from_cart',payload:id}
        case 'remove_from_cart':
            return {
                ...state,
                cartlist:state.cartlist.filter(item=>item.goods_id!=payload)
            }
    
        // 修改数量：{type:'change_qty',payload:{goods_id,goods_qty}}
        case 'change_qty':
            return {
                ...state,
                cartlist:state.cartlist.map(item=>{
                    if(item.goods_id === payload.goods_id){
                        item.goods_qty = payload.goods_qty
                    }
                    return item;
                })
            }
    
        // 清空购物车
        case 'clear_cart':
            return {
                ...state,
                cartlist:[]
            }

        default:
            return state;
    }
}

export default reducer;