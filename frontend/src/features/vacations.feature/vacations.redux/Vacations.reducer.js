import {VacConstants} from "./Vacations.constants";

const initialState = {
    vacData: [],
    followsData:[],
    loading: false,
    followLoading: false,
    error: null
};

export const VacationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case VacConstants.REQUEST_GET_ALL:
            return {
                ...state,
                loading: true
            };

        case VacConstants.SUCCESS_GET_ALL:
            return {
                ...state,
                vacData: action.vacData,
                followsData: action.follows,
                loading: false
            };

        case VacConstants.FAILURE_GET_ALL:
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
                followLoading: false
            };

        case VacConstants.UNFOLLOW_SUCCESS:
            return {
                ...state,
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
