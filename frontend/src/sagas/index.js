import vacations from './vacations.saga';

export default function* IndexSagas() {
    yield [
      vacations()
    ]
}
