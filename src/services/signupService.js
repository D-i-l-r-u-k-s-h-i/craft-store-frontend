import {createLogic} from 'redux-logic'

import {signUpActions,signUpTypes,addAdminActions,addAdminTypes} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const signup=createLogic({
    type:signUpTypes.SIGN_UP,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            email :action.payload.email,
            userName:action.payload.username,
            password :action.payload.password,
            confirmPassword:action.payload.confirm_pass,
            userType:action.payload.user_type
        }

        HTTPclient.post(endPoints.SIGNUP,obj)
            .then(resp=> {
                // debugger
                dispatch(signUpActions.signUpSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to Sign Up";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(signUpActions.signUpFail(errormsg))
            }).then(()=>done());
        
    }
})

const addadmin=createLogic({
    type:addAdminTypes.ADD_ADMIN,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            email :action.payload.email,
            username:action.payload.username,
            password :action.payload.password,
            confirmPassword:action.payload.confirm_pass,
            currentAdminPass:action.payload.current_admin_pass
        }

        HTTPclient.post(endPoints.ADD_ADMIN,obj)
            .then(resp=> {
                // debugger
                dispatch(addAdminActions.addAdminSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to Register admin";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(addAdminActions.addAdminFail(errormsg))
            }).then(()=>done());
        
    }
})

export default [
    signup,
    addadmin
]