import {UserConstants} from "./User.constants";

let user = JSON.parse(localStorage.getItem("vacationerToken"));
const initialState = user ? {
    loggedIn: true,
    registered: false,
    user,
    isAdmin: user.profile.role === 1
} : {
    errorMessege: false,
    registered: false,

};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserConstants.LOGIN_REQUEST:
            return {
                loading: true
            };
        case UserConstants.LOGIN_SUCCESS:
            const checkAdmin = action.user.profile.role === 1;
            return {
                loading: false,
                loggedIn: true,
                user: action.user,
                isAdmin: checkAdmin,
                errorMessege: false
            };
        case UserConstants.LOGIN_FAILURE:
            return {
                loading: false,
                loggedIn: false,
                errorMessege: true
            };

        case UserConstants.REGISTER_REQUEST:
            return {
                loading: true
            };
        case UserConstants.REGISTER_SUCCESS:
            return {
                registered: true,
                loading: false
            };
        case UserConstants.REGISTER_FAILURE:
            return {
                loading: false
            };
        case UserConstants.LOGOUT:
            return {
                registered: false,
            };
        case UserConstants.CANCEL_LOGIN:
            return {
                loading: false
            };

        case UserConstants.CANCEL_REGISTER:
            return {
                loading: false,
                errorMessege: false
            };
        default:
            return state;
    }
};
