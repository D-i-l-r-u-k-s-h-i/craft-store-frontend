import {createLogic} from 'redux-logic'

import {signUpActions,signUpTypes} from "../actions"

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

        debugger
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
                debugger
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

export default [
    signup,
]