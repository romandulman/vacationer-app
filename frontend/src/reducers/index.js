import { combineReducers } from 'redux';

import { users } from './users.reducers';
import { vacations } from './vacations.reducers';


const rootReducer = combineReducers({
    users,
    vacations
});

export default rootReducer;
