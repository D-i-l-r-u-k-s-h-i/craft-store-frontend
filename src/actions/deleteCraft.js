import {createAction} from 'redux-actions'

export const DELETE_CRAFT="DELETE_CRAFT";
export const SUCCESS_DELETE_CRAFT="SUCCESS_DELETE_CRAFT";
export const FAIL_DELETE_CRAFT="FAIL_DELETE_CRAFT";

export default {
    deleteCraft:createAction(DELETE_CRAFT),
    deleteCraftSuccess:createAction(SUCCESS_DELETE_CRAFT),
    deleteCraftFail:createAction(FAIL_DELETE_CRAFT)

}