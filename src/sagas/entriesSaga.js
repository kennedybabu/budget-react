import { call, put, take } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions'

export function* getAllEntries(){
    yield take(entriesTypes.GET_ENTRIES)
    console.log('get entries now')
    const results = yield call(axios, 'https://localhost:3002/entries')
    console.log(results)
    yield put({type: entriesTypes.POPULATE_ENTRIES, payload: results.data})
}