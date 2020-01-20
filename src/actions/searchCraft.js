import {createAction} from 'redux-actions'

export const SEARCH_CRAFT="SEARCH_CRAFT";
export const SUCCESS_SEARCH_CRAFT="SUCCESS_SEARCH_CRAFT";
export const FAIL_SEARCH_CRAFT="FAIL_SEARCH_CRAFT";

export default {
    searchCraft:createAction(SEARCH_CRAFT),
    searchCraftSuccess:createAction(SUCCESS_SEARCH_CRAFT),
    searchCraftFail:createAction(FAIL_SEARCH_CRAFT)

}