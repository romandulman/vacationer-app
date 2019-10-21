import { VacConstants } from "./Vacations.constants";
import { GetAllVecations,unFollow,Follow } from "../vacations.api/Vacations.api";
import {UserConstants} from "../../users.feature/user.redux/User.constants";

export const showAll = () => dispatch => {
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


export const followVac = (id) => dispatch => {
  dispatch(reqFollow());
  Follow().then(
      succsess => {
        dispatch(sucFollow(succsess));
      },
      error => {
        dispatch(failFollow(failFollow()))
      }
  );
};

export const unFollowVac = (id) => dispatch => {
  dispatch(reqFollow());
  GetAllVecations().then(
      vacations => {
        dispatch(sucUnFollow(vacations));
      },
      error => {
        dispatch(failFollow(failFollow()))
      }
  );
};


const reqGetAll = vacData => ({
  type: VacConstants.REQUEST_ALL
});

const sucGetAll = vacData => ({
  type: VacConstants.SUCCESS_ALL, vacData
});

const failureAll = vacData => ({
  type: VacConstants.FAILURE_ALL, vacData
});




const reqFollow = () =>{
  return { type: UserConstants.FOLLOW_REQUEST};
};
const sucFollow = updatedVacations => {
  return { type: UserConstants.FOLLOW_SUCCESS, updatedVacations };
};

const sucUnFollow = updatedVacations => {
  return { type: UserConstants.UNFOLLOW_SUCCESS, updatedVacations };
};
const failFollow = () => {
  return { type: UserConstants.FOLLOW_FAILURE };
};





const _showOne = vacData => ({
  type: VacConstants.SHOW_ONE,
  vacData
});
