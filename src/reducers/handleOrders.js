import {addToCartTypes,buyItemTypes,viewCartTypes,removeFromCartTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    orderData:null
}

export default handleActions({
    [addToCartTypes.ADD_TO_CART]:(state,{payload})=>({
        ...state,loading:true
    }),
    [addToCartTypes.SUCCESS_ADD_TO_CART]:(state,{payload})=>({
        ...state,loading:false,orderData:payload
    }),
    [addToCartTypes.FAIL_ADD_TO_CART]:(state,{payload})=>({
        ...state,loading:false,orderData:null
    }),
    [buyItemTypes.BUY_ITEM]:(state,{payload})=>({
        ...state,loading:true
    }),
    [buyItemTypes.SUCCESS_BUY_ITEM]:(state,{payload})=>({
        ...state,loading:false,orderData:payload
    }),
    [buyItemTypes.FAIL_BUY_ITEM]:(state,{payload})=>({
        ...state,loading:false,orderData:null
    }),
    [viewCartTypes.VIEW_CART]:(state,{payload})=>({
        ...state,loading:true
    }),
    [viewCartTypes.SUCCESS_VIEW_CART]:(state,{payload})=>({
        ...state,loading:false,orderData:payload
    }),
    [viewCartTypes.FAIL_VIEW_CART]:(state,{payload})=>({
        ...state,loading:false,orderData:null
    }),
    [removeFromCartTypes.REMOVE_FROM_CART]:(state,{payload})=>({
        ...state, removeItem: {
            ...state.removeItem,
            loading:true,
            orderData: payload
        }
    }),
    [removeFromCartTypes.SUCCESS_REMOVE_FROM_CART]:(state,{payload})=>{
        if (state.orderData && Array.isArray(state.orderData) && state.orderData.length !== 0) {
            state.orderData && state.orderData.map((removeId, index) => {
                if (removeId.craftItem.craftId == state.removeItem.orderData) {
                    return state.orderData.splice(index, 1);
                }
            })
        }
        return {
            ...state,
            removeItem: {
                ...state.removeItem,
                loading: false,
                removeItem: true,
                removeItemError: undefined
            }
        }
    },
    [removeFromCartTypes.FAIL_REMOVE_FROM_CART]:(state,{payload})=>({
        ...state,loading:false,orderData:null
    }),
},initialState)