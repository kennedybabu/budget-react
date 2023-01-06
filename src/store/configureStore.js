import { applyMiddleware, combineReducers, createStore } from "redux"
import entriesReducers from "../reducers/entries.reducers"
import {composeWithDevTools} from "redux-devtools-extension"
import modalsReducer from "../reducers/modals.reducers"
import createSagaMiddleware from "@redux-saga/core"
// import { testSaga } from "../sagas/testSaga"
import { initSagas } from "../sagas"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const configureStore = () => {
    const store = createStore(combineReducers({
        entries: entriesReducers,
        modals: modalsReducer
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
    )
    // sagaMiddleware.run(testSaga)
    initSagas(sagaMiddleware)
    return store
}

export default configureStore