import {UserConstants} from  './User.constants'
import {UserLogin,GoogleLogin}  from './User.services'
import { history } from "../../helpers";

/*const Login = ({ title, description }) => {
    this.props.dispatch({
        type: userConstants.LOGIN_REQUEST,
        payload: {
        title,
            description
    }
})*/


export const  login  = (username, password) => {
        return dispatch => {
            dispatch(request({ username }));

            UserLogin(username, password)
                .then(
                    user => {
                        dispatch(success(user));
                     history.push('/');
                    },

                    error => {
                        dispatch(failure(error));
                        //dispatch(alertActions.error(error));
                    }
                );
        };

        const request = (user) => { return { type: UserConstants.LOGIN_REQUEST, user } }
        const success = user => { return { type: UserConstants.LOGIN_SUCCESS, user } }
        const failure = error => { return { type: UserConstants.LOGIN_FAILURE, error } }

    }





