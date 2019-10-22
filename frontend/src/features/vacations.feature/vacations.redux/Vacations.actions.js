import { VacConstants } from "./Vacations.constants";
import { GetAllVecations,unFollow,Follow } from "../vacations.api/Vacations.api";

/*Show All vacation action*/
export const showAll = () => dispatch => {
  GetAllVecations().then(
    vacations => {
      dispatch(reqGetAll());
      dispatch(sucGetAll(vacations));
    },
    error => {
    dispatch(failGetAll());
    }
  );
};


/*Follow vacation action*/
export const followVac = (id,followerscount) => dispatch => {
  dispatch(reqFollow());
  Follow(id,followerscount).then(
      succsess => {
        dispatch(sucFollow(succsess));
      },
      error => {
        dispatch(failFollow(failFollow()));
      }
  );
};


/*UnFollow vacation action*/
export const unFollowVac = (id,followerscount) => dispatch => {
  dispatch(reqFollow());
  unFollow(id,followerscount).then(
      vacations => {
        dispatch(sucUnFollow(vacations));
      },
      error => {
        dispatch(failFollow(failFollow()));
      }
  );
};


const reqGetAll = ()=> ({
  type: VacConstants.REQUEST_GET_ALL
});

const sucGetAll = vacData => ({
  type: VacConstants.SUCCESS_GET_ALL, vacData
});

const failGetAll = vacData => ({
  type: VacConstants.FAILURE_GET_ALL, vacData
});


const reqFollow = () =>{
  return { type: VacConstants.FOLLOW_REQUEST};
};
const sucFollow = updatedVacations => {
  return { type: VacConstants.FOLLOW_SUCCESS, updatedVacations };
};
const sucUnFollow = updatedVacations => {
  return { type: VacConstants.UNFOLLOW_SUCCESS, updatedVacations };
};
const failFollow = () => {
  return { type: VacConstants.FOLLOW_FAILURE };
};

