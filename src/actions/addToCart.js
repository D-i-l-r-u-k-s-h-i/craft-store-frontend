import {createAction} from 'redux-actions'

export const ADD_TO_CART="ADD_TO_CART";
export const SUCCESS_ADD_TO_CART="SUCCESS_ADD_TO_CART";
export const FAIL_ADD_TO_CART="FAIL_ADD_TO_CART";

export default {
    addToCart:createAction(ADD_TO_CART),
    addToCartSuccess:createAction(SUCCESS_ADD_TO_CART),
    addToCartFail:createAction(FAIL_ADD_TO_CART)

}