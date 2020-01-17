import * as Login from './login'
import * as SignUp from './signup'
import * as AllCraft from './allCraft'
import * as AddCraft from './addCraft'

export{
    Login as loginTypes
}

export{
    SignUp as signUpTypes
}

export{
    AllCraft as allCraftTypes
}

export{
    AddCraft as addCraftTypes
}

export const loginActions=Login.default;

export const signUpActions=SignUp.default;

export const allCraftActions=AllCraft.default;

export const addCraftActions=AddCraft.default;