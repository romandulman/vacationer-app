import { UserConstants } from "./User.constants";

let user = JSON.parse(localStorage.getItem("vacationerToken")); ///jwt
const initialState = user ? {
  loggedIn: true,
  user,
  isAdmin:user.profile.role === 1
} : {};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserConstants.LOGIN_REQUEST:
      return {
        loading: true
        //user: action.user
      };
    case UserConstants.LOGIN_SUCCESS:
      const checkAdmin = action.user.profile.role === 1 ;
      return {
        loading: false,
        loggedIn: true,
        user: action.user,
        isAdmin: checkAdmin
      };
    case UserConstants.LOGIN_FAILURE:
      return {
        loading:false,
        loggedIn: false,
      };
    case UserConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};

/*const initialState = {
    data: 'abc'
}*/

/* export default (state=initialState, action)=>{
     let newState = {...state};

     switch (action.type) {
        case UserConstants.LOGIN_REQUEST:
             return {
                 loggingIn: true,
                 user: action.user,

             };

        case UserConstants.LOGIN_SUCCESS:
            return [
                alert("req")
];
        default:
            return state

        // ...
    }
};*/
////export default  UserReducer
