import {createAction} from 'redux-actions'

export const GET_CRAFTS_FOR_REVIEW="GET_CRAFTS_FOR_REVIEW";
export const SUCCESS_GET_CRAFTS_FOR_REVIEW="SUCCESS_GET_CRAFTS_FOR_REVIEW";
export const FAIL_GET_CRAFTS_FOR_REVIEW="FAIL_GET_CRAFTS_FOR_REVIEW";

export default {
    getCraftForReview:createAction(GET_CRAFTS_FOR_REVIEW),
    getCraftForReviewSuccess:createAction(SUCCESS_GET_CRAFTS_FOR_REVIEW),
    getCraftForReviewFail:createAction(FAIL_GET_CRAFTS_FOR_REVIEW)

}