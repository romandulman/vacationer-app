import {VacConstants} from './Vacations.constants'

const initialState = {
    Data: ''
};

export default (state=initialState, action={}) => {
    switch (action.type) {
        case VacConstants.SHOW_ALL:
            return [
            alert("show all")
            ];
        case VacConstants.ADD_VACATION:
            return [
                alert("ADD")
            ];


        // ...
    }
};
