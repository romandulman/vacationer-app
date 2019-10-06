import { adminConstants } from "./Admin.constants";

const initialState = {
  showReports: false,
  showVacEdit: false
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminConstants.MAKE_VAC_EDITABLE:
      return {
        isEditable: true
      };

    case adminConstants.REQUEST_FETCH_FOR_EDIT:
      return {};

    case adminConstants.SUCCESS_FETCH_FOR_EDIT:
      return {};

    case adminConstants.FAILURE_FETCH_FOR_EDIT:
      return {};

    case adminConstants.ADD_VAC:
      return {};
    case adminConstants.EDIT_VAC:
      return {};
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
