import {createAction} from 'redux-actions'

export const VIEW_CART="VIEW_CART";
export const SUCCESS_VIEW_CART="SUCCESS_VIEW_CART";
export const FAIL_VIEW_CART="FAIL_VIEW_CART";

export default {
    viewCart:createAction(VIEW_CART),
    viewCartSuccess:createAction(SUCCESS_VIEW_CART),
    viewCartFail:createAction(FAIL_VIEW_CART)

}