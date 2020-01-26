import loginService from './loginService'
import signupService from './signupService'
import allCraftService from './allCraftService'
import addCraftService from './addCraftService'
import handleOrdersService from './HandleOrdersService'

export default [
    ...loginService,
    ...signupService,
    ...allCraftService,
    ...addCraftService,
    ...handleOrdersService
]