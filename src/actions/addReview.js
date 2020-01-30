import {createAction} from 'redux-actions'

export const ADD_REVIEW="ADD_REVIEW";
export const SUCCESS_ADD_REVIEW="SUCCESS_ADD_REVIEW";
export const FAIL_ADD_REVIEW="FAIL_ADD_REVIEW";

export default {
    addReview:createAction(ADD_REVIEW),
    addReviewSuccess:createAction(SUCCESS_ADD_REVIEW),
    addReviewFail:createAction(FAIL_ADD_REVIEW)

}