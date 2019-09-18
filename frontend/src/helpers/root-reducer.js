import { combineReducers } from 'redux';

//import { users } from './users.reducers';
import  VacReducer from '../components/vacations/Vacations.reducers';
import  UserReducer  from '../components/user/User.reducers'

const RootReducer = combineReducers({
   // users,
   UserReducer,
   VacReducer
});
 export  default RootReducer
 //RootReducer;
