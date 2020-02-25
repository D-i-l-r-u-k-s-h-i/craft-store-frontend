import {createLogic} from 'redux-logic'

import {addCraftActions,addCraftTypes,updateCraftActions,updateCraftTypes} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const addcraft=createLogic({
    type:addCraftTypes.ADD_CRAFT,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.postCraft(endPoints.ADD_CRAFT,action.payload)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(addCraftActions.addCraftSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add review";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(addCraftActions.addCraftFail(errormsg))
            }).then(()=>done());
    }
})

const updatecraft=createLogic({
    type:updateCraftTypes.UPDATE_CRAFT,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.postCraft(endPoints.UPDATE_CRAFT,action.payload)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(updateCraftActions.updateCraftSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to update craft";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(updateCraftActions.updateCraftFail(errormsg))
            }).then(()=>done());
    }
})

export default [
    addcraft,
    updatecraft
]