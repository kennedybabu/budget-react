import { call, delay, fork, put, take, takeEvery } from "redux-saga/effects"

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
        yield fork(doNothing)
        yield fork(doNothing)
        yield fork(doNothing)
    }
}


export function* testSagaTakeEvery(){
    const {payload} = yield takeEvery('TEST_MESSAGE_4', takeSagaTakeEveryProcess)
    console.log(`Finish TakeEvery for index ${payload}`)
}


export function* takeSagaTakeEveryProcess({ payload }){
    yield console.log(`Process for index ${payload}`)
}


export function* infinitySaga(){
    console.log('Starting infinite saga')
    while(true){
        yield delay(500)
    }
    console.log('Ending infinte loop')
}


export function* testSagaCancel(){
    yield take('TEST_MESSAGE_4')
    yield fork(infinitySaga)
}


export function* dispatchTest() {
    let index = 0
    yield put({type:'TEST_MESSAGE_4', payload: index}) 
    // while(true){
    //     yield delay(500)
    //     index ++
    // }
}