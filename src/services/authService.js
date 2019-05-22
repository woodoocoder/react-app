import Http from '../Http'
import * as authLogin from '../store/actions/auth'

export const Login = ( email, password ) => async dispatch => {
    try{
        const response = await Http.post('/api/auth/login', { email, password });
        dispatch(authLogin.loginSuccess(response.data));
        //return response
    } catch(error){
        //instanceof NetworkError 
        dispatch(authLogin.loginFailed(error.response.data));         
        //return error             
    }         
}