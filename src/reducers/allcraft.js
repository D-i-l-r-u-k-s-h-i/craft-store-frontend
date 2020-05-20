import {allCraftTypes,
    getCraftByCategoryTypes,
    getRecentCraftTypes,
    searchCraftTypes,
    getCreatorsCraftTypes,
    deleteCraftTypes,
    addCraftTypes,
    updateCraftTypes,
    craftsForReviewTypes} from '../actions'

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
    [addCraftTypes.ADD_CRAFT]:(state,{payload})=>({
        ...state, addItem: {
            ...state.addItem,
            loading:true,
            craftData: payload
        }
    }),
    [addCraftTypes.SUCCESS_ADD_CRAFT]:(state,{payload})=>{
        console.log(state)

        var object = {};
        state.addItem.craftData.forEach((value, key) => {
            object[key] = value
        });
        
        console.log(object)        

        if (state.craftData && Array.isArray(state.craftData) && state.craftData.length !== 0) {
            object.imgFile=object.b64image.startsWith('data:image/png;base64,')?object.b64image.replace('data:image/png;base64,','') : object.b64image.replace('data:image/jpeg;base64,','')
            console.log(object)    
            return state.craftData.push(object);
        }
        
        return {
            ...state,
            addItem: {
                ...state.addItem,
                loading: false,
                addItem: true,
                addItemError: undefined
            }
        }
    },
    [addCraftTypes.FAIL_ADD_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:null
    }),
    [updateCraftTypes.UPDATE_CRAFT]:(state,{payload})=>({
        ...state, addItem: {
            ...state.addItem,
            loading:true,
            craftData: payload
        }
    }),
    [updateCraftTypes.SUCCESS_UPDATE_CRAFT]:(state,{payload})=>{
        console.log(state)

        var object = {};
        state.addItem.craftData.forEach((value, key) => {
            object[key] = value
        });
        
        console.log(object)

        if (state.craftData && Array.isArray(state.craftData) && state.craftData.length !== 0) {
            state.craftData && state.craftData.map((removeId, index) => {
                // console.log(removeId)
                // console.log(object)
                if (removeId.craftId == object.craftId) {
                    
                    object.ciName=object && object.hasOwnProperty('ciName') ?object.ciName:object.ciName=removeId.ciName
                    object.ciPrice=object && object.hasOwnProperty('ciPrice')?object.ciPrice :object.ciPrice=removeId.ciPrice
                    object.shortDescription=object && object.hasOwnProperty('shortDescription')?object.shortDescription:object.shortDescription=removeId.shortDescription
                    object.longDescription=object && object.hasOwnProperty('longDescription')?object.longDescription:object.longDescription=removeId.longDescription
                    object.imgFile=object && object.hasOwnProperty('imgFile')?(object.imgFile=object.b64image.startsWith('data:image/png;base64,')?object.b64image.replace('data:image/png;base64,','') : object.b64image.replace('data:image/jpeg;base64,','')):object.imgFile=removeId.imgFile
                    
                    console.log(object)
                    return state.craftData.splice(index, 1, object)
                }
                })

        }
        
        return {
            ...state,
            addItem: {
                ...state.addItem,
                loading: false,
                addItem: true,
                addItemError: undefined
            }
        }
    },
    [updateCraftTypes.FAIL_UPDATE_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:null
    }),
    [deleteCraftTypes.DELETE_CRAFT]:(state,{payload})=>({
        ...state, removeItem: {
            ...state.removeItem,
            loading:true,
            craftData: payload
        }
    }),
    [deleteCraftTypes.SUCCESS_DELETE_CRAFT]:(state,{payload})=>{
        console.log(payload)
        console.log(state)
        if (state.craftData && Array.isArray(state.craftData) && state.craftData.length !== 0) {
            state.craftData && state.craftData.map((removeId, index) => {
                console.log(removeId.craftId)
                console.log(state.removeItem.craftData)
                if (removeId.craftId == state.removeItem.craftData && payload.status=='DELETE') {
                    return state.craftData.splice(index, 1);
                }
            })
        }
        return {
            ...state,
            removeItem: {
                ...state.removeItem,
                loading: false,
                removeItem: true,
                removeItemError: undefined,
                message:payload.message
            }
        }
    },
    [deleteCraftTypes.FAIL_DELETE_CRAFT]:(state,{payload})=>({
        ...state,loading:false,craftData:null
    }),
    [craftsForReviewTypes.GET_CRAFTS_FOR_REVIEW]:(state,{payload})=>({
        ...state,loading:true
    }),
    [craftsForReviewTypes.SUCCESS_GET_CRAFTS_FOR_REVIEW]:(state,{payload})=>({
        ...state,loading:false,craftData:payload
    }),
    [craftsForReviewTypes.FAIL_GET_CRAFTS_FOR_REVIEW]:(state,{payload})=>({
        ...state,loading:false,craftData:null
    }),
},initialState)