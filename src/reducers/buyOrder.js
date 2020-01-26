import {buyOrderTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    purchaseData:null
}

export default handleActions({
    [buyOrderTypes.BUY_ORDER]:(state,{payload})=>({
        ...state,loading:true
    }),
    [buyOrderTypes.SUCCESS_BUY_ORDER]:(state,{payload})=>({
        ...state,loading:false,purchaseData:payload
    }),
    [buyOrderTypes.FAIL_BUY_ORDER]:(state,{payload})=>({
        ...state,loading:false,purchaseData:null
    }),
},initialState)