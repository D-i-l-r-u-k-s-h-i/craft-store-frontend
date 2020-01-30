import {createAction} from 'redux-actions'

export const ADD_RATING="ADD_RATING";
export const SUCCESS_ADD_RATING="SUCCESS_ADD_RATING";
export const FAIL_ADD_RATING="FAIL_ADD_RATING";

export default {
    addRating:createAction(ADD_RATING),
    addRatingSuccess:createAction(SUCCESS_ADD_RATING),
    addRatingFail:createAction(FAIL_ADD_RATING)

}