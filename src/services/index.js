import loginService from './loginService'
import signupService from './signupService'
import allCraftService from './allCraftService'
import addCraftService from './addCraftService'
import handleOrdersService from './HandleOrdersService'
import ratingsAndReviewsService from './RatingsAndReviewsService'
import notificationsService from './notificationsService'

export default [
    ...loginService,
    ...signupService,
    ...allCraftService,
    ...addCraftService,
    ...handleOrdersService,
    ...ratingsAndReviewsService,
    ...notificationsService
]