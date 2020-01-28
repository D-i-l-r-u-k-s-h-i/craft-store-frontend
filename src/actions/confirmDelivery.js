import {createAction} from 'redux-actions'

export const CONFIRM_DELIVERY="CONFIRM_DELIVERY";
export const SUCCESS_CONFIRM_DELIVERY="SUCCESS_CONFIRM_DELIVERY";
export const FAIL_CONFIRM_DELIVERY="FAIL_CONFIRM_DELIVERY";

export default {
    confirmDelivery:createAction(CONFIRM_DELIVERY),
    confirmDeliverySuccess:createAction(SUCCESS_CONFIRM_DELIVERY),
    confirmDeliveryFail:createAction(FAIL_CONFIRM_DELIVERY)

}