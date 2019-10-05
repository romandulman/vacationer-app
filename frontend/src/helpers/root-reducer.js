import { combineReducers } from 'redux';
import  {VacationsReducer} from '../features';
import  {UserReducer}  from '../features'
import  {AdminReducer} from "../features";

const RootReducer = combineReducers({
   UserReducer,
   AdminReducer,
   VacationsReducer
});
export  default  RootReducer
