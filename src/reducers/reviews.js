import {addReviewTypes,getReviewTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    ReviewData:null
}

export default handleActions({
    [addReviewTypes.ADD_REVIEW]:(state,{payload})=>({
        ...state,loading:true
    }),
    [addReviewTypes.SUCCESS_ADD_REVIEW]:(state,{payload})=>({
        ...state,loading:false,ReviewData:payload
    }),
    [addReviewTypes.FAIL_ADD_REVIEW]:(state,{payload})=>({
        ...state,loading:false,ReviewData:null
    }),
    [getReviewTypes.GET_REVIEW]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getReviewTypes.SUCCESS_GET_REVIEW]:(state,{payload})=>({
        ...state,loading:false,ReviewData:payload
    }),
    [getReviewTypes.FAIL_GET_REVIEW]:(state,{payload})=>({
        ...state,loading:false,ReviewData:null
    }),
},initialState)