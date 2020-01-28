import {createAction} from 'redux-actions'

export const UPDATE_CRAFT="UPDATE_CRAFT";
export const SUCCESS_UPDATE_CRAFT="SUCCESS_UPDATE_CRAFT";
export const FAIL_UPDATE_CRAFT="FAIL_UPDATE_CRAFT";

export default {
    updateCraft:createAction(UPDATE_CRAFT),
    updateCraftSuccess:createAction(SUCCESS_UPDATE_CRAFT),
    updateCraftFail:createAction(FAIL_UPDATE_CRAFT)

}