import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import RootSagas from './root-sagas';
import RootReducer from './root-reducer';
import {UserConstants} from "../components/user/User.constants";
import thunkMiddleware from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();


/*export let  RootReducer = (state={}, action)=>{
    switch (action.type) {
        case UserConstants.LOGIN_SUCCESS:
            return [
                alert("Success")
            ];
        case UserConstants.LOGIN_REQUEST:
            return [
                alert("req")
            ];


        // ...
    }
};*/



export const store = createStore(
       RootReducer,
   applyMiddleware(
       thunkMiddleware,
     loggerMiddleware )

);

//sagaMiddleware.run(RootSagas);




