import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


const config = {
    headers: {"Content-Type": "application/json"},
    withCredentials: true,
}

function* fetchCurrentProgram () {
    try{
        const response = yield axios.get(`/api/program/myProgram`);
        console.log('am i gettin a response from the server', response)
        yield put({
          type: 'SET_CURRENT_PROGRAM',
          payload: response.data
        })
      } catch (error) {
        console.log('error getting user program back from server', )
      }
}



function* currentProgramSaga () {
    yield takeLatest('FETCH_CURRENT_PROGRAM', fetchCurrentProgram);
}

export default currentProgramSaga