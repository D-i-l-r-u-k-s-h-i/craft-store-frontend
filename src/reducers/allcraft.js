import {allCraftTypes,getCraftByCategoryTypes,getRecentCraftTypes,searchCraftTypes,getCreatorsCraftTypes} from '../actions'

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
    [getCraftByCategoryTypes.GET_CRAFT_BY_CATEGORY]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getCraftByCategoryTypes.SUCCESS_GET_CRAFT_BY_CATEGORY]:(state,{payload})=>({
        ...state,loading:false,craftData:payload
    }),
    [getCraftByCategoryTypes.FAIL_GET_CRAFT_BY_CATEGORY]:(state,{payload})=>({
        ...state,loading:false,craftData:null
    }),
    [getRecentCraftTypes.GET_RECENT_CRAFT]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getRecentCraftTypes.SUCCESS_GET_RECENT_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:payload
    }),
    [getRecentCraftTypes.FAIL_GET_RECENT_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:null
    }),
    [searchCraftTypes.SEARCH_CRAFT]:(state,{payload})=>({
        ...state,loading:true
    }),
    [searchCraftTypes.SUCCESS_SEARCH_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:payload
    }),
    [searchCraftTypes.FAIL_SEARCH_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:null
    }),
    [getCreatorsCraftTypes.GET_CREATORS_CRAFT]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getCreatorsCraftTypes.SUCCESS_GET_CREATORS_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:payload
    }),
    [getCreatorsCraftTypes.FAIL_GET_CREATORS_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:null
    }),
},initialState)