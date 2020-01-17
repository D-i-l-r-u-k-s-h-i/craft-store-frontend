import {createLogic} from 'redux-logic'

import {addCraftActions,addCraftTypes} from "../actions"

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
            img:action.payload.image,
            itemQuantity:action.payload.quantity,
            shortDescription:action.payload.shortDesc,
            longDescription:action.payload.longDesc,
        }

        HTTPclient.post(endPoints.ADD_CRAFT,obj)
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

export default [
    addcraft,
    
]