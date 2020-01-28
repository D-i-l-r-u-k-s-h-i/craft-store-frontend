import {createAction} from 'redux-actions'

export const GET_CREATORS_ORDERS="GET_CREATORS_ORDERS";
export const SUCCESS_GET_CREATORS_ORDERS="SUCCESS_GET_CREATORS_ORDERS";
export const FAIL_GET_CREATORS_ORDERS="FAIL_GET_CREATORS_ORDERS";

export default {
    getCreatorsOrders:createAction(GET_CREATORS_ORDERS),
    getCreatorsOrdersSuccess:createAction(SUCCESS_GET_CREATORS_ORDERS),
    getCreatorsOrdersFail:createAction(FAIL_GET_CREATORS_ORDERS)

}