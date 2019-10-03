import { combineReducers } from 'redux';
import  {VacationsReducer} from '../features';
import  {UserReducer}  from '../features'

const RootReducer = combineReducers({
   UserReducer,
   VacationsReducer
});
export  default  RootReducer
