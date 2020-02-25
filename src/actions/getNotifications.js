import {createAction} from 'redux-actions'

export const GET_NOTIFICATIONS="GET_NOTIFICATIONS";
export const SUCCESS_GET_NOTIFICATIONS="SUCCESS_GET_NOTIFICATIONS";
export const FAIL_GET_NOTIFICATIONS="FAIL_GET_NOTIFICATIONS";

export default {
    getNotifications:createAction(GET_NOTIFICATIONS),
    getNotificationsSuccess:createAction(SUCCESS_GET_NOTIFICATIONS),
    getNotificationsFail:createAction(FAIL_GET_NOTIFICATIONS)

}