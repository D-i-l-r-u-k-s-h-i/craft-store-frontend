import {addCraftTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    craftData:null
}

export default handleActions({
    [addCraftTypes.ADD_CRAFT]:(state,{payload})=>({
        ...state,loading:true
    }),
    [addCraftTypes.SUCCESS_ADD_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:payload
    }),
    [addCraftTypes.FAIL_ADD_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:null
    }),
},initialState)