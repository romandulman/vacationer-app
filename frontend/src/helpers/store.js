import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import RootSagas from './root-sagas';
import RootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

export const store = createStore(
    RootReducer,
    applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
    )
);

sagaMiddleware.run(RootSagas);




