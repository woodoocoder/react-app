import * as ActionTypes from '../action-types'

export function loginSuccess(data){
    return {
        type: ActionTypes.AUTH_LOGIN_SUCCESS,
        data
    }
}

export function loginFailed(error){
    return {
        type: ActionTypes.AUTH_LOGIN_FAILED,
        error
    }
}