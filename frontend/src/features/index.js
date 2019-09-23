import * as VacContainer from './vacations.feature/vacations.containers/Vacations.container'
import VacReducer from './vacations.feature/vacations.redux/Vacations.reducer'
import * as VacSaga from './vacations.feature/vacations.redux/Vacations.saga'
import *  as VacService from './vacations.feature/vacations.api/Vacations.api'

export { Vacations as VacItemComponent } from "./vacations.feature/vacations.components/VacationItem.component";

export default { VacReducer, VacContainer, VacSaga, VacService}
