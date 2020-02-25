import {getNotificationTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    notificationData:null
}

export default handleActions({
    [getNotificationTypes.GET_NOTIFICATIONS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getNotificationTypes.SUCCESS_GET_NOTIFICATIONS]:(state,{payload})=>({
        ...state,loading:false,notificationData:payload
    }),
    [getNotificationTypes.FAIL_GET_NOTIFICATIONS]:(state,{payload})=>({
        ...state,loading:false,notificationData:null
    }),
},initialState)