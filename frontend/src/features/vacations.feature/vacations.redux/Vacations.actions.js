import {VacConstants} from  './Vacations.constants'
import {GetAllVecations}  from './Vacations.services'

export const showAll = () => dispatch => {

    GetAllVecations().then(vacations => {
      //dispatch(_showAll("k"));
      dispatch(successAll(vacations));
     // history.push("/vacations");
    });

};


const requestAll = vacData => ({
    type: VacConstants.REQUEST_ALL,
  //  payload: {vacData}
});
const failureAll = vacData => ({
    type: VacConstants.FAILURE_ALL,
    payload: { vacData }  });

const successAll = vacData => ({
    type: VacConstants.SUCCESS_ALL,
    payload: { vacData }
});

const _showOne = vacData => ({ type: VacConstants.SHOW_ONE, vacData });

