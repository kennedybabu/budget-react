// import * as testSaga from './testSaga'
import * as entriesSaga from './entriesSaga'
import * as entrySagaDeletion from './entriesSagaDeletion'
import * as addEntrySaga from './entriesSagaAdd'

export function initSagas(sagaMiddleware){
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entrySagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(addEntrySaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))

}