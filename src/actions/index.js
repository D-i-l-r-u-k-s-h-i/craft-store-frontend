import * as Login from './login'
import * as SignUp from './signup'
import * as AllCraft from './allCraft'
import * as AddCraft from './addCraft'
import * as GetCraftByCategory from './craftByCategory'
import * as GetRecentCraft from './recentCraft'
import * as SearchCraft from './searchCraft'
import * as GetCreatorsCraft from './creatorsCraftItems'

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

export{
    GetCraftByCategory as getCraftByCategoryTypes
}

export{
    GetRecentCraft as getRecentCraftTypes
}

export{
    SearchCraft as searchCraftTypes
}

export{
    GetCreatorsCraft as getCreatorsCraftTypes
}

export const getRecentCraftActions=GetRecentCraft.default

export const getCreatorsCraftActions=GetCreatorsCraft.default

export const searchCraftActions=SearchCraft.default

export const loginActions=Login.default;

export const signUpActions=SignUp.default;

export const allCraftActions=AllCraft.default;

export const getCraftByCategoryActions=GetCraftByCategory.default;

export const addCraftActions=AddCraft.default;