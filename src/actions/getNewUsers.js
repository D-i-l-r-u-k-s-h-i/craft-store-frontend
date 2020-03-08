import {createAction} from 'redux-actions'

export const GET_NEW_USERS="GET_NEW_USERS";
export const SUCCESS_GET_NEW_USERS="SUCCESS_GET_NEW_USERS";
export const FAIL_GET_NEW_USERS="FAIL_GET_NEW_USERS";

export default {
    getNewUsers:createAction(GET_NEW_USERS),
    getNewUsersSuccess:createAction(SUCCESS_GET_NEW_USERS),
    getNewUsersFail:createAction(FAIL_GET_NEW_USERS)

}