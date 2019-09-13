import { combineReducers } from 'redux';

//import { users } from './users.reducers';
import  VacReducer from '../components/vacations';


const RootReducer = combineReducers({
   // users,
    VacReducer
});

export default RootReducer;
