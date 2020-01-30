import {createAction} from 'redux-actions'

export const GET_REVIEW="GET_REVIEW";
export const SUCCESS_GET_REVIEW="SUCCESS_GET_REVIEW";
export const FAIL_GET_REVIEW="FAIL_GET_REVIEW";

export default {
    getReview:createAction(GET_REVIEW),
    getReviewSuccess:createAction(SUCCESS_GET_REVIEW),
    getReviewFail:createAction(FAIL_GET_REVIEW)

}