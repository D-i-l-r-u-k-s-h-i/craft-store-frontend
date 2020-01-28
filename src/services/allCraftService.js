import {
    createLogic
} from 'redux-logic'

import {
    allCraftActions,
    allCraftTypes,
    getCraftByCategoryActions,
    getCraftByCategoryTypes,
    getRecentCraftActions,
    getRecentCraftTypes,
    searchCraftActions,
    searchCraftTypes,
    getCreatorsCraftActions,
    getCreatorsCraftTypes,
    deleteCraftActions,
    deleteCraftTypes,
    confirmDeliveryActions,
    confirmDeliveryTypes
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
                var errormsg = "Failed to get all craft";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(allCraftActions.allCraftFail(errormsg))
            }).then(() => done());
    }
})

const craftbycategory = createLogic({
    type: getCraftByCategoryTypes.GET_CRAFT_BY_CATEGORY,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)
        let category=action.payload.category

        HTTPclient.get(endPoints.GET_CRAFT_BY_CATEGORY+category)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(getCraftByCategoryActions.getCraftByCategorySuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get craft";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getCraftByCategoryActions.getCraftByCategoryFail(errormsg))
            }).then(() => done());
    }
})

const recentcrafts = createLogic({
    type: getRecentCraftTypes.GET_RECENT_CRAFT,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        HTTPclient.get(endPoints.RECENT_CRAFT)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(getRecentCraftActions.getRecentCraftSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get crafts";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getCraftByCategoryActions.getCraftByCategoryFail(errormsg))
            }).then(() => done());
    }
})

const searchcraft = createLogic({
    type: searchCraftTypes.SEARCH_CRAFT,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)
        let searchString=action.payload.searchString

        HTTPclient.get(endPoints.SEARCH_CRAFT+searchString)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(searchCraftActions.searchCraftSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get craft";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(searchCraftActions.searchCraftFail(errormsg))
            }).then(() => done());
    }
})

const creatorscraft = createLogic({
    type: getCreatorsCraftTypes.GET_CREATORS_CRAFT,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)
        let creatorId=action.payload.creatorId

        HTTPclient.get(endPoints.CREATORS_CRAFT+creatorId)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(getCreatorsCraftActions.getCreatorsCraftSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get craft";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getCreatorsCraftActions.getCreatorsCraftFail(errormsg))
            }).then(() => done());
    }
})

const deletecraft = createLogic({
    type: deleteCraftTypes.DELETE_CRAFT,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)
        let craftId=action.payload

        HTTPclient.post(endPoints.DELETE_CRAFT+craftId)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(deleteCraftActions.deleteCraftSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get craft";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(deleteCraftActions.deleteCraftFail(errormsg))
            }).then(() => done());
    }
})

const confirmdelivery = createLogic({
    type: confirmDeliveryTypes.CONFIRM_DELIVERY,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)
        let orderCraftId=action.payload

        HTTPclient.post(endPoints.CRAFT_DELIVERY+orderCraftId)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(confirmDeliveryActions.confirmDeliverySuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get craft";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(confirmDeliveryActions.confirmDeliveryFail(errormsg))
            }).then(() => done());
    }
})

export default [
    allcraft,
    craftbycategory,
    recentcrafts,
    searchcraft,
    creatorscraft,
    deletecraft,
    confirmdelivery
]