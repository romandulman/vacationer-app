import { adminConstants } from "./Admin.constants";
import {VacConstants} from "../../../../vacations.feature/vacations.redux/Vacations.constants";

const initialState = {
  showReports: false,
  showVacEdit: false,
  showDialog: {show:false,opType:null},
  vacations:[]
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminConstants.MAKE_VAC_EDITABLE:
      return {
        ...state,
        isEditable: true
      };
    case adminConstants.OPEN_DIALOG:
      return {
        ...state,
        showDialog: {show:true,opType:"Add"},
      };
    case adminConstants.CANCEL_DIALOG:
      return {
        ...state,
        showDialog: {show:false,opType:null}
      };


    case adminConstants.REQUEST_ALL:
      return {
        ...state,
        loading: true
      };
    case adminConstants.SUCCESS_ALL:
      return {
        ...state,
        vacations: action.vacations,
        loading: false
      };

    case adminConstants.FAILURE_ALL:
      return {
        ...state,
        loading: false
      };





    case adminConstants.REQUEST_FETCH_FOR_EDIT:
      return {
        ...state,
        showDialog: {show:false,opType:null}
      };

    case adminConstants.SUCCESS_FETCH_FOR_EDIT:
      return {
        ...state,
        showDialog: { show:true ,opType:'Edit'},
        data: action.vacation
      };

    case adminConstants.FAILURE_FETCH_FOR_EDIT:
      return {
        ...state,
      };



    case adminConstants.REQUEST_SUBMIT_FOR_EDIT:
      return {
        ...state,
        loading: true
      };
    case adminConstants.SUCCESS_SUBMIT_FOR_EDIT:
      return {
        ...state,
        loading: false
      };
    case adminConstants.FAILURE_SUBMIT_FOR_EDIT:
      return {
        ...state,
        loading: false
      };



    case adminConstants.REQUEST_SUBMIT_NEW:
      return {
        ...state,
        loading: true
      };
    case adminConstants.SUCCESS_SUBMIT_NEW:
      console.log(action.newVac)
      return {
        ...state,
        vacations: [...state.vacations, action.newVac],
        loading: false
      };
    case adminConstants.FAILURE_SUBMIT_NEW:
      return {
        ...state,
        loading: false
      };


    case adminConstants.REQUEST_DELETE:
      return {
        ...state,
        loading: true
      };

    case adminConstants.SUCCESS_DELETE:
      const data = [...state.vacations].filter(item => item.id !== parseInt(action.id));
      return {
        ...state,
        vacations: data,
        loading: false
      };
    case adminConstants.FAILURE_DELETE:
      return {
        ...state,
        loading: false
      };


    case adminConstants.FETCH_REPORTS:
      return {
        showReports: action.data
      };

    default:
      return state;
  }
};
