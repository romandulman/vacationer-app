import { adminConstants } from "./Admin.constants";
import { GetVacationToEdit, PostVacationToEdit,PostNewVacation } from "../admin.api/Admin.api";

export const openEditVac = id => {
  return dispatch => {
    dispatch(reqFetchEdit());
    console.log(id)
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

export const submitNewVac = data => {
  return dispatch => {
    dispatch(reqSubmitNew());
    PostNewVacation(data).then(
        response => {
          dispatch(sucSubmitNew(response));
        },
        error => {
          dispatch(failSubmitNew(error));
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



const reqSubmitNew = () => ({
  type: adminConstants.REQUEST_SUBMIT_NEW
});
const sucSubmitNew = vacation => ({
  type: adminConstants.SUCCESS_SUBMIT_NEW,
  vacation
});
const failSubmitNew = error => ({
  type: adminConstants.FAILURE_SUBMIT_NEW,
  error
});




export const cancelDialog = () => ({
  type: adminConstants.CANCEL_DIALOG
});

export const openAddDialog = () => ({
  type: adminConstants.OPEN_DIALOG
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
