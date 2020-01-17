import loginService from './loginService'
import signupService from './signupService'
import allCraftService from './allCraftService'
import addCraftService from './addCraftService'

export default [
    ...loginService,
    ...signupService,
    ...allCraftService,
    ...addCraftService
]