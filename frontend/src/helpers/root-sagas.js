import VacSaga from '../components/vacations';

export default function* RootSagas() {
    yield [
      VacSaga()
    ]
}
