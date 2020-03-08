import {createLogic} from 'redux-logic'

import {getNewUserActions,getNewUserTypes} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const getusers=createLogic({
    type:getNewUserTypes.GET_NEW_USERS,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.get(endPoints.NEW_USERS)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(getNewUserActions.getNewUsersSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to get new users";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getNewUserActions.getNewUsersFail(errormsg))
            }).then(()=>done());
    }
})


export default [
    getusers
]