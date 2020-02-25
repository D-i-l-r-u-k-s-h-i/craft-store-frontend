import {signUpTypes, addAdminTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    SignUpData:null
}

export default handleActions({
    [signUpTypes.SIGN_UP]:(state,{payload})=>({
        ...state,loading:true
    }),
    [signUpTypes.SUCCESS_SIGN_UP]:(state,{payload})=>({
        ...state,loading:false,SignUpData:payload
    }),
    [signUpTypes.FAIL_SIGN_UP]:(state,{payload})=>({
        ...state,loading:false,SignUpData:null
    }),
    [addAdminTypes.ADD_ADMIN]:(state,{payload})=>({
        ...state,loading:true
    }),
    [addAdminTypes.SUCCESS_ADD_ADMIN]:(state,{payload})=>({
        ...state,loading:false,SignUpData:payload
    }),
    [addAdminTypes.FAIL_ADD_ADMIN]:(state,{payload})=>({
        ...state,loading:false,SignUpData:null
    }),
},initialState)