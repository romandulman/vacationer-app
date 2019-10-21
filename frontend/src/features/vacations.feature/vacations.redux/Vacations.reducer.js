import {VacConstants} from "./Vacations.constants";

const initialState = {
    vacData: [],
    loading: false,
    followLoading: false,
    error: null
};

export const VacationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case VacConstants.REQUEST_ALL:
            return {
                ...state,
                loading: true
            };

        case VacConstants.SUCCESS_ALL:
            return {
                ...state,
                vacData: action.vacData,
                loading: false
            };

        case VacConstants.FAILURE_ALL:
            return {
                ...state,
                loading: false
            };

        case VacConstants.FOLLOW_REQUEST:
            return {
                ...state,
                followLoading: true,

            };

        case VacConstants.FOLLOW_SUCCESS:
            return {
                ...state,
                vacData: action.vacData,
                followLoading: false
            };

        case VacConstants.UNFOLLOW_SUCCESS:
            return {
                ...state,
                vacData: action.vacData,
                followLoading: false
            };

        case VacConstants.FOLLOW_FAILURE:
            return {
                ...state,
                followLoading: false
            };

        default:
            return state;
    }
};
