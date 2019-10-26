import { adminConstants } from "./Admin.constants";
import {GetVacationToEdit, UpdateVacation, PostNewVacation, DeleteVacation,GetFollowData} from "../admin.api/Admin.api";
import {GetAllVecations} from "../../../../vacations.feature/vacations.api/Vacations.api";

/*///  Admin Actions ///*/

/* Fetch all vacations Action*/
export const fecthAllVacations = () => dispatch => {
    dispatch(reqGetAll());
    GetAllVecations().then(
      vacations => {
        dispatch(sucGetAll(vacations));
      },
      error => {
        dispatch(failGetAll(error));
      }
  );
};


/* Fetch Vacation to edit and open Vacation edit modal*/
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


/*  Submit updated Vacation Action */
export const submitUpdate = (updatedVac,vacId) => {
  return dispatch => {
    dispatch(reqSubmitEdit());
    UpdateVacation(updatedVac,vacId).then(
      response => {
        dispatch(sucSubmitEdit(response));
      },
      error => {
        dispatch(failSubmitEdit(error));
      }
    );
  };
};

/*  Submit New Vacation Action */
export const submitNewVac = newVac => {
  return dispatch => {
    dispatch(reqSubmitNew());
    PostNewVacation(newVac).then(
        response => {
          dispatch(sucSubmitNew(response));
        },
        error => {
          console.log("error",error)
          dispatch(failSubmitNew(error));
        }
    );
  };
};


/*  Delete Vacation Action */
export const deleteVacation = vacId => {
  return dispatch => {
    dispatch(reqDelete());
   DeleteVacation(vacId).then(
        response => {
          dispatch(sucDelete(response.deletedId));
        },
        error => {
          console.log("error",error);
          dispatch(failDelete(error));
        }
    );
  };
};


/*  Fetach  Follow Reports Action */
export const followReports = ()=> {
  return dispatch => {
    dispatch(reqReports());
    GetAllVecations().then(
        response => {
          console.log(response)
          dispatch(sucReports(response));
        },
        error => {
          console.log("error",error);
          dispatch(failReports(error));
        }
    );
  };
};



export const makeVacEditable = () => ({
  type: adminConstants.MAKE_VAC_EDITABLE
});
export const unMakeVacEditable = () => ({
    type: adminConstants.UNMAKE_VAC_EDITABLE
});

const reqGetAll = () => ({
  type: adminConstants.REQUEST_ALL
});

const sucGetAll = vacations => ({
  type: adminConstants.SUCCESS_ALL, vacations
});

const failGetAll = error => ({
  type: adminConstants.FAILURE_ALL, error
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
const sucSubmitNew = newVac=> ({
  type: adminConstants.SUCCESS_SUBMIT_NEW,
  newVac
});
const failSubmitNew = error => ({
  type: adminConstants.FAILURE_SUBMIT_NEW,
  error
});


const reqDelete = () => ({
  type: adminConstants.REQUEST_DELETE,
});
const sucDelete = id => ({
  type: adminConstants.SUCCESS_DELETE,
  id
});
const failDelete = error => ({
  type: adminConstants.FAILURE_DELETE,
  error
});


export const cancelDialog = () => ({
  type: adminConstants.CANCEL_DIALOG
});

export const openAddDialog = () => ({
  type: adminConstants.OPEN_DIALOG
});



 const reqReports = () => ({
  type: adminConstants.REQUEST_FETCH_REPORTS
});

 const sucReports = followersData => ({
  type: adminConstants.SUCCESS_FETCH_REPORTS, followersData
});

const failReports = error => ({
  type: adminConstants.FAILURE_FETCH_REPORTS, error
});