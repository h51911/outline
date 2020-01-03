import {ADD_TO_CART,CHANGE_QTY,REMOVE_FROM_CART,CLEAR_CART} from '../reducer/cart';

export function add2cart(goods){
    return {
        type:ADD_TO_CART,
        payload:goods
    }
}

export function changeQty(id,qty){
    return {
        type:CHANGE_QTY,
        payload:{
            goods_id:id,
            goods_qty:qty
        }
    }
}

export function remove(id){
    return {
        type:REMOVE_FROM_CART,
        payload:id
    }
}

export function clear(){
    return {
        type:CLEAR_CART
    }
}

export default {
    add2cart,
    changeQty,
    remove,
    clear
}