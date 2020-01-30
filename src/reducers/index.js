import { combineReducers } from "redux"
import login from './login'
import signup from './signup';
import allcraft from './allcraft'
import handleOrders from './handleOrders'
import changeQty from "./changeQty";
import orderTotal from './orderTotal'
import buyOrder from './buyOrder'
import ratings from './ratings'
import reviews from './reviews'
import creatorForRating from './creatorForRating'

const rootReducer=combineReducers({
    Login:login,
    SignUp:signup,
    AllCraft:allcraft,
    HandleOrders:handleOrders,
    ChangeQuantity:changeQty,
    OrderTotal:orderTotal,
    BuyOrder:buyOrder,
    Ratings:ratings,
    Reviews:reviews,
    CreatorForRating:creatorForRating
})

export default rootReducer;