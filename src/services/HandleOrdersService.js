import {createLogic} from 'redux-logic'

import {addToCartTypes,
    addToCartActions,
    buyItemActions,
    buyItemTypes,
    viewCartActions,
    viewCartTypes,
    changeQuantityActions,
    changeQuantityTypes,
    removeFromCartActions,
    removeFromCartTypes,
    displayCardTotalActions,
    displayCardTotalTypes,
    buyOrderActions,
    buyOrderTypes
} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const addtocart=createLogic({
    type:addToCartTypes.ADD_TO_CART,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let craftid=action.payload

        HTTPclient.post(endPoints.ADD_TO_CART+craftid)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(addToCartActions.addToCartSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add item to cart";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(addToCartActions.addToCartFail(errormsg))
            }).then(()=>done());
    }
})

const buyitem=createLogic({
    type:buyItemTypes.BUY_ITEM,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            craftItem:action.payload.craft,
            quantity:action.payload.qty
        }

        HTTPclient.post(endPoints.BUY_ITEM,obj)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(buyItemActions.buyItemSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add item to cart";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(buyItemActions.buyItemFail(errormsg))
            }).then(()=>done());
    }
})

const viewcart=createLogic({
    type:viewCartTypes.VIEW_CART,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.get(endPoints.CART)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(viewCartActions.viewCartSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add item to cart";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(viewCartActions.viewCartFail(errormsg))
            }).then(()=>done());
    }
})

const changeqty=createLogic({
    type:changeQuantityTypes.CHANGE_QUANTITY,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)
        console.log("payload check",action.payload.itemid)
        console.log("payload check",action.payload.qty)

        let obj={
            craftId:action.payload.itemid,
            quantity:action.payload.qty
        }

        HTTPclient.post(endPoints.CHANGE_ITEM_QUANTITY,obj)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(changeQuantityActions.changeQuantitySuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to change item quantity ";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(changeQuantityActions.changeQuantityFail(errormsg))
            }).then(()=>done());
    }
})

const removefromcart=createLogic({
    type:removeFromCartTypes.REMOVE_FROM_CART,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let craftid=action.payload

        HTTPclient.post(endPoints.REMOVE_FROM_CART+craftid)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(removeFromCartActions.removeFromCartSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add item to cart";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(removeFromCartActions.removeFromCartFail(errormsg))
            }).then(()=>done());
    }
})

const ordertot =createLogic({
    type:displayCardTotalTypes.DISPLAY_CARD_TOTAL,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.get(endPoints.ORDER_TOTAL)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(displayCardTotalActions.displayCardTotalSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add item to cart";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(displayCardTotalActions.displayCardTotalFail(errormsg))
            }).then(()=>done());
    }
})

const buyorder =createLogic({
    type:buyOrderTypes.BUY_ORDER,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.post(endPoints.BUY_ORDER)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(buyOrderActions.buyOrderSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to purchase order";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(buyOrderActions.buyOrderFail(errormsg))
            }).then(()=>done());
    }
})

export default [
    addtocart,
    buyitem,
    viewcart,
    changeqty,
    removefromcart,
    ordertot,
    buyorder
]