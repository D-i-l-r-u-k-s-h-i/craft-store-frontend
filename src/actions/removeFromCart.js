import {createAction} from 'redux-actions'

export const REMOVE_FROM_CART="REMOVE_FROM_CART";
export const SUCCESS_REMOVE_FROM_CART="SUCCESS_REMOVE_FROM_CART";
export const FAIL_REMOVE_FROM_CART="FAIL_REMOVE_FROM_CART";

export default {
    removeFromCart:createAction(REMOVE_FROM_CART),
    removeFromCartSuccess:createAction(SUCCESS_REMOVE_FROM_CART),
    removeFromCartFail:createAction(FAIL_REMOVE_FROM_CART)

}