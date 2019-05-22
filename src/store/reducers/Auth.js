import * as ActionTypes from '../action-types'
import http from '../../Http'
import { ToastAndroid, AsyncStorage } from 'react-native';

import * as localStorage from "../../LocalStorage"

const user = {

};

const initialState = {
    isAuthenticated : false,
    user
};

const Auth = (state = initialState, action) => {
	
    //console.log('payload is: ');
    //console.log(payload);
    //return state;
	
    switch(action.type){		
        case ActionTypes.AUTH_LOGIN_SUCCESS:
            return authLoginSuccessHandler({state, action});
        case ActionTypes.AUTH_LOGIN_FAILED:
            return authLoginFailedHandler({state, action});            
        case "TEST_TYPE":
            ToastAndroid.show(action.email, ToastAndroid.SHORT);
            return state;			
        default:
            return state;
    }
};

const authLoginSuccessHandler = (data) => {
    console.log("authLoginSuccessHandler()");
    //console.log(data);

    const token = data.action.data.access_token
    //console.log(token);                       
    localStorage.set('access_token', token)
    http.defaults.headers.common['Authorization'] = 'Bearer ' + token

    state = {}

    return state;
};

const authLoginFailedHandler = (data) => {

    console.log("authLoginFailedHandler()");

    // @todo
    let error_msg = '';

    if(errors = data.action.error.errors){
        error_msg = errors[Object.keys(errors)[0]][0];
    } else if(message = data.action.error.message){
        error_msg = message
    } else{
        error_msg = "Something went wrong, please try again";
    }

    ToastAndroid.show(error_msg, ToastAndroid.LONG);

    state = {}
    
    return state;
};

export default Auth;