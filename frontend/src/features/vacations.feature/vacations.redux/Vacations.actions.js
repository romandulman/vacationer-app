import {VacConstants} from "./Vacations.constants";
import {GetAllVecations, GetAllFollows, unFollow, Follow} from "../vacations.api/Vacations.api";

/*///  Vacations Actions ///*/

/*Show All vacation action*/
export const showAll = () => dispatch => {
    dispatch(reqGetAll());
    GetAllVecations().then(
        async vacations => {
           await GetAllFollows()
                .then(follows => {
                       dispatch(sucGetAll(vacations, follows));
                    }, error => {
                        dispatch(failGetAll(error));
                    }
                )
        },
        error => {
            dispatch(failGetAll(error));
        }
    );
};


/*Follow vacation action*/
export const followVac = (id,followerscount) => dispatch => {
  dispatch(reqFollow());
  Follow(id,followerscount).then(
      succsess => {
        dispatch(sucFollow(succsess));
       dispatch(showAll())
      },
      error => {
        dispatch(failFollow(failFollow(error)));
      }
  );
};


/*UnFollow vacation action*/
export const unFollowVac = (id,followerscount) => dispatch => {
  dispatch(reqFollow());
  unFollow(id,followerscount).then(
      vacations => {
        dispatch(sucUnFollow(vacations));
        dispatch(showAll())
      },
      error => {
        dispatch(failFollow(failFollow(error)));
      }
  );
};


const reqGetAll = ()=> ({
  type: VacConstants.REQUEST_GET_ALL
});

const sucGetAll = (vacData,follows) => ({
  type: VacConstants.SUCCESS_GET_ALL, vacData,follows
});

const failGetAll = error => ({
  type: VacConstants.FAILURE_GET_ALL, error
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
const failFollow = (error) => {
  return { type: VacConstants.FOLLOW_FAILURE,error };
};

