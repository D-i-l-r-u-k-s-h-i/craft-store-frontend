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
        if (state.craftData && Array.isArray(state.craftData) && state.craftData.length !== 0) {
            let obj={
                ciName:state.addItem.craftData.name,
                ciPrice:state.addItem.craftData.price,
                shortDescription:state.addItem.craftData.shortDesc,
                longDescription:state.addItem.craftData.longDesc,
                img:state.addItem.craftData.image
            }
            return state.craftData.push(obj);
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
        if (state.craftData && Array.isArray(state.craftData) && state.craftData.length !== 0) {
            state.craftData && state.craftData.map((removeId, index) => {
                console.log(removeId.craftId)
                console.log(state.addItem.craftData.craftid)
                if (removeId.craftId == state.addItem.craftData.craftid) {
                    let obj={
                        craftId:removeId.craftId,
                        ciName:state.addItem.craftData.name!=null? state.addItem.craftData.name:removeId.ciName,
                        ciPrice:state.addItem.craftData.price!=0 ? state.addItem.craftData.price:removeId.ciPrice,
                        shortDescription:state.addItem.craftData.shortDesc !=null? state.addItem.craftData.shortDesc:removeId.shortDescription,
                        longDescription:state.addItem.craftData.longDesc !=null? state.addItem.craftData.longDesc:removeId.longDescription,
                        img:state.addItem.craftData.image !=null ?state.addItem.craftData.image:removeId.img
                    }
                    console.log(obj)
                    return state.craftData.splice(index,1, obj)
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
        console.log(state)
        if (state.craftData && Array.isArray(state.craftData) && state.craftData.length !== 0) {
            state.craftData && state.craftData.map((removeId, index) => {
                console.log(removeId.craftId)
                console.log(state.removeItem.craftData)
                if (removeId.craftId == state.removeItem.craftData) {
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
                removeItemError: undefined
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