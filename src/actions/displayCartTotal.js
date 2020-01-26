import {createAction} from 'redux-actions'

export const DISPLAY_CARD_TOTAL="DISPLAY_CARD_TOTAL";
export const SUCCESS_DISPLAY_CARD_TOTAL="SUCCESS_DISPLAY_CARD_TOTAL";
export const FAIL_DISPLAY_CARD_TOTAL="FAIL_DISPLAY_CARD_TOTAL";

export default {
    displayCardTotal:createAction(DISPLAY_CARD_TOTAL),
    displayCardTotalSuccess:createAction(SUCCESS_DISPLAY_CARD_TOTAL),
    displayCardTotalFail:createAction(FAIL_DISPLAY_CARD_TOTAL)
}