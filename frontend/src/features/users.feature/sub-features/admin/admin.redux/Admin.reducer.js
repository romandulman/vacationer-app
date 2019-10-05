import {adminConstants} from "./Admin.constants";

const initialState = {
    showReports: false
}
export const AdminReducer = (state=initialState,action) =>{
    switch (action.type) {
        case adminConstants.ADD_VAC:
            return{

            };
        case adminConstants.EDIT_VAC:

            return{

            };
        case  adminConstants.DELETE_VAC:
            return{

            };

        case  adminConstants.FETCH_REPORTS:
            return{
            showReports: action.data
            };
        default:
            return state;
    }
    



}
