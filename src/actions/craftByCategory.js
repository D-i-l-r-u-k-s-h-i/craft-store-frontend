import {createAction} from 'redux-actions'

export const GET_CRAFT_BY_CATEGORY="GET_CRAFT_BY_CATEGORY";
export const SUCCESS_GET_CRAFT_BY_CATEGORY="SUCCESS_GET_CRAFT_BY_CATEGORY";
export const FAIL_GET_CRAFT_BY_CATEGORY="FAIL_GET_CRAFT_BY_CATEGORY";

export default {
    getCraftByCategory:createAction(GET_CRAFT_BY_CATEGORY),
    getCraftByCategorySuccess:createAction(SUCCESS_GET_CRAFT_BY_CATEGORY),
    getCraftByCategoryFail:createAction(FAIL_GET_CRAFT_BY_CATEGORY)

}