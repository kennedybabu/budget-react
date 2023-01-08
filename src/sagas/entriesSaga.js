import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import types from "../actions/entries.actions";
import entriesTypes from '../actions/entries.actions'

export function* getAllEntries(){
    yield take(entriesTypes.GET_ENTRIES)
    console.log('get entries now')
    const results = yield call(axios, 'http://localhost:3002/entries')
    console.log(results)
    yield put({type: types.POPULATE_ENTRIES, payload: results.data})
}