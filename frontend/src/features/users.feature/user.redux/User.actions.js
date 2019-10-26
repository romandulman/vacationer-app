import {UserConstants} from "./User.constants";
import {UserLogin, UserLogout, CheckUsernames, UserRegister} from "../user.api/User.api";

/*///  User Actions ///*/

/*User Login action*/
export const userLogin = (username, password) => {
    return dispatch => {
        dispatch(loginRquest({username}));
        UserLogin(username, password).then(
            user => {
                dispatch(loginSuccess(user));
            },
            error => {
                dispatch(loginFailure(error));
            }
        );
    };
};


/*Register User action*/
export const userRegister = newUser => {
    return dispatch => {
        dispatch(regRequest());
        UserRegister(newUser)
            .then(user => {
                dispatch(regSuccess(user))
                }, error => {
              dispatch(regFailure(error))
                }
            )
    };
};

export const UserLogoutAction = () => {
    UserLogout();
    return {type: UserConstants.LOGOUT};
};

const loginRquest = () => ({type: UserConstants.LOGIN_REQUEST});
const loginSuccess = user => ({type: UserConstants.LOGIN_SUCCESS, user});
const loginFailure = error => ({type: UserConstants.LOGIN_FAILURE, error});


const regRequest = () => ({type: UserConstants.REGISTER_REQUEST});
const regSuccess = user => ({type: UserConstants.REGISTER_SUCCESS, user});
const regFailure = error => ({type: UserConstants.REGISTER_FAILURE, error});

export const cancelLogin = () => ({type: UserConstants.CANCEL_LOGIN});
export const cancelRegister = error => ({type: UserConstants.CANCEL_REGISTER, error});
