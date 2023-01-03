import { combineReducers, createStore } from "redux"
import entriesReducers from "../reducers/entries.reducers"
import {composeWithDevTools} from "redux-devtools-extension"
import modalsReducer from "../reducers/modals.reducers"

const configureStore = () => {
    return createStore(combineReducers({
        entries: entriesReducers,
        modals: modalsReducer
    }),
    composeWithDevTools()
    )
}

export default configureStore