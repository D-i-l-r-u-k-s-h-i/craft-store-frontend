import {createLogic} from 'redux-logic'

import {getNotificationTypes,getNotificationsActions} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const getnotification=createLogic({
    type:getNotificationTypes.GET_NOTIFICATIONS,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.get(endPoints.SHOW_NOTIFICATIONS)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(getNotificationsActions.getNotificationsSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add review";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getNotificationsActions.getNotificationsFail(errormsg))
            }).then(()=>done());
    }
})


export default [
    getnotification
]