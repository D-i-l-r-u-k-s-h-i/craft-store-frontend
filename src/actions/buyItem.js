import {createAction} from 'redux-actions'

export const BUY_ITEM="BUY_ITEM";
export const SUCCESS_BUY_ITEM="SUCCESS_BUY_ITEM";
export const FAIL_BUY_ITEM="FAIL_BUY_ITEM";

export default {
    buyItem:createAction(BUY_ITEM),
    buyItemSuccess:createAction(SUCCESS_BUY_ITEM),
    buyItemFail:createAction(FAIL_BUY_ITEM)

}