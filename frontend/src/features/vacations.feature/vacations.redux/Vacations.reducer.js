import {VacConstants} from './Vacations.constants'

const initialState = {
   vacData:[],
   loading: false,
   error: null
};


export const VacationsReducer =  (state=initialState, action) => {
    switch (action.type) {
        case VacConstants.REQUEST_ALL:
        return {
            ...state,
            loading: true
        };
        case VacConstants.SUCCESS_ALL:
            return {
                ...state,
                vacData: action.payload.vacData,
                loading: false
            };

        case VacConstants.FAILURE_ALL:
           return {
               ...state,
               loading: false,

           };
        default:
            return state
    }

};
