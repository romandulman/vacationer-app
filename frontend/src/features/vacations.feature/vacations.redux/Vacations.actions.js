import { VacConstants } from "./Vacations.constants";
import { GetAllVecations } from "../vacations.api/Vacations.api";

export const showAll = () => dispatch => {
  GetAllVecations().then(
    vacations => {
      //dispatch(_showAll("k"));
      dispatch(successAll(vacations));

      // history.push("/vacations");
    },
    error => {
      //dispatch(failure(error));
      //dispatch(alertActions.error(error));
    }
  );
};

const requestAll = vacData => ({
  type: VacConstants.REQUEST_ALL
  //  payload: {vacData}
});
const failureAll = vacData => ({
  type: VacConstants.FAILURE_ALL,
  payload: { vacData }
});

const successAll = vacData => ({
  type: VacConstants.SUCCESS_ALL,
  payload: { vacData }
});

const _showOne = vacData => ({
  type: VacConstants.SHOW_ONE,
  vacData
});
