import { adminConstants } from "./Admin.constants";
import { GetVacationToEdit, PostVacationToEdit } from "../admin.api/Admin.api";

export const openEditVac = id => {
  return dispatch => {
    dispatch(reqFetchEdit());
    GetVacationToEdit(id).then(
      vacation => {
        dispatch(sucFetchEdit(vacation));
      },
      error => {
        dispatch(failFetchEdit(error));
      }
    );
  };
};

export const submitEditVac = data => {
  return dispatch => {
    dispatch(reqSubmitEdit());
    PostVacationToEdit(data).then(
      response => {
        dispatch(sucSubmitEdit(response));
      },
      error => {
        dispatch(failSubmitEdit(error));
      }
    );
  };
};

export const makeVacEditable = () => ({
  type: adminConstants.MAKE_VAC_EDITABLE
});

const reqFetchEdit = () => ({
  type: adminConstants.REQUEST_FETCH_FOR_EDIT
});
const sucFetchEdit = vacation => ({
  type: adminConstants.SUCCESS_FETCH_FOR_EDIT,
  vacation
});
const failFetchEdit = error => ({
  type: adminConstants.FAILURE_FETCH_FOR_EDIT,
  error
});

const reqSubmitEdit = () => ({
  type: adminConstants.REQUEST_SUBMIT_FOR_EDIT
});
const sucSubmitEdit = vacation => ({
  type: adminConstants.SUCCESS_SUBMIT_FOR_EDIT,
  vacation
});
const failSubmitEdit = error => ({
  type: adminConstants.FAILURE_SUBMIT_FOR_EDIT,
  error
});

export const addVac = newVac => ({
  type: adminConstants.ADD_VAC,
  newVac
});

export const delVac = oldVac => ({
  type: adminConstants.DELETE_VAC,
  oldVac
});

export const editVac = (newVac, oldVac) => ({
  type: adminConstants.EDIT_VAC,
  newVac,
  oldVac
});

export const viewReports = data => ({
  type: adminConstants.DELETE_VAC,
  data
});
