import {changeQuantityTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    quantityData:null
}

export default handleActions({
    [changeQuantityTypes.CHANGE_QUANTITY]:(state,{payload})=>({
        ...state,loading:true
    }),
    [changeQuantityTypes.SUCCESS_CHANGE_QUANTITY]:(state,{payload})=>({
        ...state,loading:false,quantityData:payload
    }),
    [changeQuantityTypes.FAIL_CHANGE_QUANTITY]:(state,{payload})=>({
        ...state,loading:false,quantityData:null
    }),
},initialState)