import {displayCardTotalTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    totalData:null
}

export default handleActions({
    [displayCardTotalTypes.DISPLAY_CARD_TOTAL]:(state,{payload})=>({
        ...state,loading:true
    }),
    [displayCardTotalTypes.SUCCESS_DISPLAY_CARD_TOTAL]:(state,{payload})=>({
        ...state,loading:false,totalData:payload
    }),
    [displayCardTotalTypes.FAIL_DISPLAY_CARD_TOTAL]:(state,{payload})=>({
        ...state,loading:false,totalData:null
    }),
},initialState)