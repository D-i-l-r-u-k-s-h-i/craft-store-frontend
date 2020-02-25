import {createAction} from 'redux-actions'

export const ADD_ADMIN="ADD_ADMIN";
export const SUCCESS_ADD_ADMIN="SUCCESS_ADD_ADMIN";
export const FAIL_ADD_ADMIN="FAIL_ADD_ADMIN";

export default {
    addAdmin:createAction(ADD_ADMIN),
    addAdminSuccess:createAction(SUCCESS_ADD_ADMIN),
    addAdminFail:createAction(FAIL_ADD_ADMIN)

}