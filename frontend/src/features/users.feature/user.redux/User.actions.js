import { UserConstants } from "./User.constants";
import { UserLogin, GoogleLogin, UserLogout, CheckUsernames, UserRegister } from "../user.api/User.api";
//import { history } from "../../../helpers";
//import { withRouter } from "react-router-dom"
//import { createBrowserHistory } from 'history';

//export const history = createBrowserHistory();

export const UserLoginAction = (username, password) => {
  //

    return dispatch => {

    dispatch(request({ username }));
    UserLogin(username, password).then(
      user => {
          console.log(user)
        dispatch(success(user));
     //history.push("/allvacations");
      },

      error => {
        dispatch(failure(error));
       //dispatch(alertActions.error(error));
      }
    );
  };
};

export const NamesCheck = (username) => {
 CheckUsernames(username).then(
        checked => {
            if (username === checked){
                alert("The Username " + checked + " is take, try another ")
            }
        },
        error => {

        }
    );
};

export const UserRegisterAction = (username,password,firstname,lastname) =>{
    UserRegister(username,password,firstname,lastname).then(user=>{
    })
};

export const UserLogoutAction = () =>{
    UserLogout();
   // history.push("/login");
    return { type: UserConstants.LOGOUT };

};

const request = user => {
  return { type: UserConstants.LOGIN_REQUEST, user };
};
const success = user => {
  return { type: UserConstants.LOGIN_SUCCESS, user };
};
const failure = error => {
  return { type: UserConstants.LOGIN_FAILURE, error };
};


const regRequest = user => {
    return { type: UserConstants.REGISTER_REQUEST, user };
};
const regSuccess = user => {
    return { type: UserConstants.REGISTER_SUCCESS, user };
};
const regFailure = error => {
    return { type: UserConstants.REGISTER_FAILURE, error };
};


