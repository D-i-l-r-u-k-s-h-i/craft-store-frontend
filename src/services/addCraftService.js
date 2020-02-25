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

        let obj={
            ciName : action.payload.name,
            ciPrice:action.payload.price,
            // img:action.payload.image,
            // imgFile:action.payload.image,
            itemQuantity:action.payload.quantity,
            shortDescription:action.payload.shortDesc,
            longDescription:action.payload.longDesc,
            category:action.payload.category,
            type:action.payload.type
        }

        console.log(obj)

        //${endPoints.ADD_CRAFT}?=${action.payload.image}`
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

        let obj={
            craftId:action.payload.craftid,
            ciName : action.payload.name,
            ciPrice:action.payload.price,
            img:action.payload.image,
            itemQuantity:action.payload.quantity,
            shortDescription:action.payload.shortDesc,
            longDescription:action.payload.longDesc,
            category:action.payload.category,
            type:action.payload.type,
            availabilityStatus:action.payload.availability
        }

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