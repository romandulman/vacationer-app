import * as VacContainer from './Vacations.container'
import VacReducer from './Vacations.reducers'
import * as VacSaga from './Vacations.saga'
import *  as VacService from './Vacations.services'

export { Vacations as VacItemComponent } from "./Vacations.container";

export default { VacReducer, VacContainer, VacSaga, VacService}
