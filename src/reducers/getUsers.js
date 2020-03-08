import {getNewUserTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    userData:null
}

export default handleActions({
    [getNewUserTypes.GET_NEW_USERS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getNewUserTypes.SUCCESS_GET_NEW_USERS]:(state,{payload})=>({
        ...state,loading:false,userData:payload
    }),
    [getNewUserTypes.FAIL_GET_NEW_USERS]:(state,{payload})=>({
        ...state,loading:false,userData:null
    }),
},initialState)