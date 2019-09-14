import { UserConstants } from "./User.constants";
import { UserLogin, GoogleLogin, UserLogout, CheckUsernames, UserRegister } from "./User.services";
import { history } from "../../helpers";

export const UserLoginAction = (username, password) => {
  return dispatch => {
    dispatch(request({ username }));

    UserLogin(username, password).then(
      user => {
        dispatch(success(user));
        history.push("/");
      },

      error => {
        dispatch(failure(error));
       // dispatch(alertActions.error(error));
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
}

export const UserLogoutAction = () =>{
    UserLogout();
    return { type: UserConstants.LOGOUT };
}

const request = user => {
  return { type: UserConstants.LOGIN_REQUEST, user };
};
const success = user => {
  return { type: UserConstants.LOGIN_SUCCESS, user };
};
const failure = error => {
  return { type: UserConstants.LOGIN_FAILURE, error };
};




