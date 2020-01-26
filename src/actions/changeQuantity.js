import {createAction} from 'redux-actions'

export const CHANGE_QUANTITY="CHANGE_QUANTITY";
export const SUCCESS_CHANGE_QUANTITY="SUCCESS_CHANGE_QUANTITY";
export const FAIL_CHANGE_QUANTITY="FAIL_CHANGE_QUANTITY";

export default {
    changeQuantity:createAction(CHANGE_QUANTITY),
    changeQuantitySuccess:createAction(SUCCESS_CHANGE_QUANTITY),
    changeQuantityFail:createAction(FAIL_CHANGE_QUANTITY)

}