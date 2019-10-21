import { adminConstants } from "./Admin.constants";
import { GetVacationToEdit, PostVacationToEdit,PostNewVacation } from "../admin.api/Admin.api";
import {GetAllVecations} from "../../../../vacations.feature/vacations.api/Vacations.api";



export const fecthAllVacations = () => dispatch => {
  GetAllVecations().then(
      vacations => {
        //dispatch(_showAll("k"));
        dispatch(sucGetAll(vacations));

        // history.push("/vacations");
      },
      error => {
        //dispatch(failure(error));
        //dispatch(alertActions.error(error));
      }
  );
};

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



const reqGetAll = () => ({
  type: adminConstants.REQUEST_ALL
});

const sucGetAll = vacations => ({
  type: adminConstants.SUCCESS_ALL, vacations
});

const failureAll = vacData => ({
  type: adminConstants.FAILURE_ALL, vacData
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
const sucSubmitNew = updatedVacations=> ({
  type: adminConstants.SUCCESS_SUBMIT_NEW,
  updatedVacations
});
const failSubmitNew = error => ({
  type: adminConstants.FAILURE_SUBMIT_NEW,
  error
});


const reqDelete = () => ({
  type: adminConstants.REQUEST_DELETE,
});
const sucDelete = updatedVacations => ({
  type: adminConstants.SUCCESS_DELETE,
  updatedVacations
});
const failDelete = error => ({
  type: adminConstants.FAILUREDELETE,
  error
});


export const cancelDialog = () => ({
  type: adminConstants.CANCEL_DIALOG
});

export const openAddDialog = () => ({
  type: adminConstants.OPEN_DIALOG
});



export const viewReports = data => ({
  type: adminConstants.DELETE_VAC,
  data
});
