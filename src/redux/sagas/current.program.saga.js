import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


const config = {
    headers: {"Content-Type": "application/json"},
    withCredentials: true,
}

function* fetchUserProgram () {
    try{
        yield put ({
          type: 'START_GET_USER_PROGRAM'
        })
        const response = yield axios.get(`/api/user/myProgram/`, config);
        console.log('am i gettin a response from the server', response)
        yield put({
          type: 'SET_USER_PROGRAM',
          payload: response.data
        })
      } catch (error) {
        console.log('error getting user program back from server', )
      }
}



function* currentUserSaga () {
    yield takeLatest('FETCH_USER_PROGRAM', fetchUserProgram);
}

export default currentUserSaga