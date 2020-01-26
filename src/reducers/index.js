import { combineReducers } from "redux"
import login from './login'
import signup from './signup';
import allcraft from './allcraft'
import addcraft from './addcraft'
import handleOrders from './handleOrders'
import changeQty from "./changeQty";
import orderTotal from './orderTotal'
import buyOrder from './buyOrder'

const rootReducer=combineReducers({
    Login:login,
    SignUp:signup,
    AllCraft:allcraft,
    AddCraft:addcraft,
    HandleOrders:handleOrders,
    ChangeQuantity:changeQty,
    OrderTotal:orderTotal,
    BuyOrder:buyOrder
})

export default rootReducer;