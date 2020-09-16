import { AUTH_ROUTE } from 'src/app/common/constants/routes.constants'

export const LOGIN_ROUTE = {
    path:'login',
    // get url
}

export const FORGOT_PASSWORD_ROUTE ={
    path:'forgot-password'
}
export const RESET_PASSWORD_ROUTE ={
    path:'reset-password/:id'
}
export const REGISTER_ROUTE ={
    path:'register',
    get url():string{
        return `${AUTH_ROUTE.url}/${this.path}`
    }
}

export const AUTH_ROUTES_CONSTANTS ={
    LOGIN_ROUTE,
    FORGOT_PASSWORD_ROUTE,
    REGISTER_ROUTE,
    RESET_PASSWORD_ROUTE
}