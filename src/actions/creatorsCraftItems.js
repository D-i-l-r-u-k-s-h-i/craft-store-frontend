import {createAction} from 'redux-actions'

export const GET_CREATORS_CRAFT="GET_CREATORS_CRAFT";
export const SUCCESS_GET_CREATORS_CRAFT="SUCCESS_GET_CREATORS_CRAFT";
export const FAIL_GET_CREATORS_CRAFT="FAIL_GET_CREATORS_CRAFT";

export default {
    getCreatorsCraft:createAction(GET_CREATORS_CRAFT),
    getCreatorsCraftSuccess:createAction(SUCCESS_GET_CREATORS_CRAFT),
    getCreatorsCraftFail:createAction(FAIL_GET_CREATORS_CRAFT)

}