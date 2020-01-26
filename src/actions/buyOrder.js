import {createAction} from 'redux-actions'

export const BUY_ORDER="BUY_ORDER";
export const SUCCESS_BUY_ORDER="SUCCESS_BUY_ORDER";
export const FAIL_BUY_ORDER="FAIL_BUY_ORDER";

export default {
    buyOrder:createAction(BUY_ORDER),
    buyOrderSuccess:createAction(SUCCESS_BUY_ORDER),
    buyOrderFail:createAction(FAIL_BUY_ORDER)

}