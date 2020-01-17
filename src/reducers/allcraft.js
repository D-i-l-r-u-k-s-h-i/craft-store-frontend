import {allCraftTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    craftData:null
}

export default handleActions({
    [allCraftTypes.GET_ALL_CRAFT]:(state,{payload})=>({
        ...state,loading:true
    }),
    [allCraftTypes.SUCCESS_GET_ALL_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:payload
    }),
    [allCraftTypes.FAIL_GET_ALL_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:null
    }),
},initialState)