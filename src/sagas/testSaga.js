import { call, delay, put, take } from "redux-saga/effects"

function double(num){
    return num * 2
}

export function* testSaga(){
    while(true){
        console.log('starting saga')
        yield take('TEST_MESSAGE')
        const a = yield call(double, 3)
        console.log(a)
        const b =yield double(3)
        console.log(b)
        console.log("i'm a saga func")
    }
    
}

export function* dispatchTest() {
    while(true){
        yield delay(3000)
        yield put({type:'TEST_MESSAGE'})
    }
}