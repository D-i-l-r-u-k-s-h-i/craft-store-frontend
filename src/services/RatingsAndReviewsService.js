import {createLogic} from 'redux-logic'

import {craftsForReviewActions,
        craftsForReviewTypes,
        creatorForRatingActions,
        creatorForRatingTypes,
        addRatingActions,
        addRatingTypes,
        addReviewActions,
        addReviewTypes,
        getReviewActions,
        getReviewTypes
} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const craftsforreviews=createLogic({
    type:craftsForReviewTypes.GET_CRAFTS_FOR_REVIEW,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.get(endPoints.CRAFT_FOR_REVIEWS)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(craftsForReviewActions.getCraftForReviewSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add review";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(craftsForReviewActions.getCraftForReviewFail(errormsg))
            }).then(()=>done());
    }
})

const creatorforratings=createLogic({
    type:creatorForRatingTypes.GET_CREATOR_FOR_RATING,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        HTTPclient.get(endPoints.CREATOR_FOR_RATINGS)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(creatorForRatingActions.getCreatorForRatingSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add review";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(creatorForRatingActions.getCreatorForRatingFail(errormsg))
            }).then(()=>done());
    }
})

const addrating=createLogic({
    type:addRatingTypes.ADD_RATING,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            creatorId:action.payload.creatorId,
            rating:action.payload.rating
        }

        HTTPclient.post(endPoints.ADD_RATING,obj)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(addRatingActions.addRatingSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add rating";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(addRatingActions.addRatingFail(errormsg))
            }).then(()=>done());
    }
})

const addreview=createLogic({
    type:addReviewTypes.ADD_REVIEW,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            craftId: action.payload.craftId,
            reviewDescription:action.payload.review,
        }

        HTTPclient.post(endPoints.ADD_REVIEW,obj)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(addReviewActions.addReviewSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add review";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(addReviewActions.addReviewFail(errormsg))
            }).then(()=>done());
    }
})

const getreviews = createLogic({
    type: getReviewTypes.GET_REVIEW,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        let creatorId=action.payload

        HTTPclient.get(endPoints.GET_REVIEWS+creatorId)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(getReviewActions.getReviewSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get reviews";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getReviewActions.getReviewFail(errormsg))
            }).then(() => done());
    }
})

export default [
    craftsforreviews,
    creatorforratings,
    addreview,
    addrating,
    getreviews
]