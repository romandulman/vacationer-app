import { adminConstants } from "./Admin.constants";

const initialState = {
  showReports: false,
  showVacEdit: false,
  showDialog: {show:false,opType:null}
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminConstants.MAKE_VAC_EDITABLE:
      return {
        ...state,
        isEditable: true
      };
    case adminConstants.OPEN_DIALOD:
      return {
        ...state,
        showDialog: {show:true,opType:"Add"}
      }
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

    case adminConstants.CANCEL_DIALOD:
      return {
        ...state,
        showDialog: {show:false,opType:null}
      };


    case adminConstants.ADD_VAC:
      return {

      };
    case adminConstants.EDIT_VAC:
      return {

      };
    case adminConstants.DELETE_VAC:
      return {};

    case adminConstants.FETCH_REPORTS:
      return {
        showReports: action.data
      };

    default:
      return state;
  }
};
