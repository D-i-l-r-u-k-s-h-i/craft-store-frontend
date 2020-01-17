import {
    createLogic
} from 'redux-logic'

import {
    allCraftActions,
    allCraftTypes
} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const allcraft = createLogic({
    type: allCraftTypes.GET_ALL_CRAFT,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        HTTPclient.get(endPoints.ALL_CRAFT)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(allCraftActions.allCraftSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get all vehicles";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(allCraftActions.allCraftFail(errormsg))
            }).then(() => done());
    }
})

export default [
    allcraft,
]