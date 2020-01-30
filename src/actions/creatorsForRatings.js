import {createAction} from 'redux-actions'

export const GET_CREATOR_FOR_RATING="GET_CREATOR_FOR_RATING";
export const SUCCESS_GET_CREATOR_FOR_RATING="SUCCESS_GET_CREATOR_FOR_RATING";
export const FAIL_GET_CREATOR_FOR_RATING="FAIL_GET_CREATOR_FOR_RATING";

export default {
    getCreatorForRating:createAction(GET_CREATOR_FOR_RATING),
    getCreatorForRatingSuccess:createAction(SUCCESS_GET_CREATOR_FOR_RATING),
    getCreatorForRatingFail:createAction(FAIL_GET_CREATOR_FOR_RATING)

}