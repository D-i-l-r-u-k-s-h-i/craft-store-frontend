import {createAction} from 'redux-actions'

export const GET_PAST_ORDERS="GET_PAST_ORDERS";
export const SUCCESS_GET_PAST_ORDERS="SUCCESS_GET_PAST_ORDERS";
export const FAIL_GET_PAST_ORDERS="FAIL_GET_PAST_ORDERS";

export default {
    getPastOrders:createAction(GET_PAST_ORDERS),
    getPastOrdersSuccess:createAction(SUCCESS_GET_PAST_ORDERS),
    getPastOrdersFail:createAction(FAIL_GET_PAST_ORDERS)

}