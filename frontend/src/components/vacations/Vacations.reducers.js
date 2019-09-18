import {VacConstants} from './Vacations.constants'

const initialState = {
   Data:''
};


export default (state=initialState, action) => {
    switch (action.type) {

        case VacConstants.SHOW_ALL:

         //state.vacData = action.vacData,
              state.Data = action.vacData;



        case VacConstants.SHOW_ONE:
            return {
                //state.vacData = action.vacData,
                vacData: action.vacData

            };
        default:
            return state
        // ...
    }

};
