import {createAction} from 'redux-actions'

export const GET_RECENT_CRAFT="GET_RECENT_CRAFT";
export const SUCCESS_GET_RECENT_CRAFT="SUCCESS_GET_RECENT_CRAFT";
export const FAIL_GET_RECENT_CRAFT="FAIL_GET_RECENT_CRAFT";

export default {
    getRecentCraft:createAction(GET_RECENT_CRAFT),
    getRecentCraftSuccess:createAction(SUCCESS_GET_RECENT_CRAFT),
    getRecentCraftFail:createAction(FAIL_GET_RECENT_CRAFT)

}