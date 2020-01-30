import {creatorForRatingTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    CreatorData:null
}
export default handleActions({
    [creatorForRatingTypes.GET_CREATOR_FOR_RATING]:(state,{payload})=>({
        ...state,loading:true
    }),
    [creatorForRatingTypes.SUCCESS_GET_CREATOR_FOR_RATING]:(state,{payload})=>({
        ...state,loading:false, CreatorData:payload
    }),
    [creatorForRatingTypes.FAIL_GET_CREATOR_FOR_RATING]:(state,{payload})=>({
        ...state,loading:false, CreatorData:null
    }),
},initialState)

