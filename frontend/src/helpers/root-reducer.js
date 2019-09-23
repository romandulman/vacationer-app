import { combineReducers } from 'redux';
import  VacReducer from '../features';
import  UserReducer  from '../features'

const RootReducer = combineReducers({
   UserReducer,
   VacReducer
});
export  default  RootReducer
