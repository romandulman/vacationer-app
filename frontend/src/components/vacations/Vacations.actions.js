import {VacConstants} from  './Vacations.constants'
import {GetAllVecations}  from './Vacations.services'
import { history } from "../../helpers";

export const showAll = () => dispatch => {




    GetAllVecations().then(data => {
      //dispatch(_showAll("k"));
      dispatch(showall(data));

     // history.push("/vacations");
    });



};

const showall = vacData => {
    return { type: VacConstants.SHOW_ALL, vacData  };
};
const _showOne = vacData => {
  return { type: VacConstants.SHOW_ONE, vacData  };
};
