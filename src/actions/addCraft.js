import {createAction} from 'redux-actions'

export const ADD_CRAFT="ADD_CRAFT";
export const SUCCESS_ADD_CRAFT="SUCCESS_ADD_CRAFT";
export const FAIL_ADD_CRAFT="FAIL_ADD_CRAFT";

export default {
    addCraft:createAction(ADD_CRAFT),
    addCraftSuccess:createAction(SUCCESS_ADD_CRAFT),
    addCraftFail:createAction(FAIL_ADD_CRAFT)

}