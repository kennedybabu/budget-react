import { call, delay, fork, put, take } from "redux-saga/effects"

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

function* doNothing(){
    console.log('Ive been called')
    yield delay(1000)
    console.log('Im doing nothing')
}

export function* testSagaFork(){
    while(true){
        yield take('TEST_MESSAGE_2')
        // yield delay(1000)
        yield call(doNothing)
        // yield fork(doNothing)
        // yield fork(doNothing)
    }
}


export function* dispatchTest() {
    while(true){
        yield delay(3000)
        yield put({type:'TEST_MESSAGE_2', payload: 1000})
    }
}