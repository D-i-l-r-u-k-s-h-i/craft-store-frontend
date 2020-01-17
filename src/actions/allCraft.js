import {createAction} from 'redux-actions'

export const GET_ALL_CRAFT="GET_ALL_CRAFT";
export const SUCCESS_GET_ALL_CRAFT="SUCCESS_GET_ALL_CRAFT";
export const FAIL_GET_ALL_CRAFT="FAIL_GET_ALL_CRAFT";

export default {
    allCraft:createAction(GET_ALL_CRAFT),
    allCraftSuccess:createAction(SUCCESS_GET_ALL_CRAFT),
    allCraftFail:createAction(FAIL_GET_ALL_CRAFT)

}