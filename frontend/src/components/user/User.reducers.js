import {UserConstants} from './User.constants'

const initialState = {
    data: 'abc'
}

 export default (state=initialState, action)=>{
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
};
////export default  UserReducer
