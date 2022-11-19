import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


const config = {
    headers: {"Content-Type": "application/json"},
    withCredentials: true,
}


function* fetchProgramWeeks(action) {
    // console.log('in fetchProgramsWeeks function in program.saga with action:', action.payload)
  try {
    const response = yield axios.get(`/api/user/program/${action.payload}`, config);
    // console.log('what is the response', response.data)
  
    yield put({ type: 'SET_PROGRAM_WEEKS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}


function* fetchProgramDays (action) {
    // console.log('in fetchprogram days function with action of', action.payload)
    try{
  
      const response = yield axios.get (`/api/user/program/${action.payload.programId}/week/${action.payload.weekId}`, config);
  
      yield put ({ type: 'SET_PROGRAM_DAYS', payload: response.data})
      // console.log('whats the response for days from the server??', response.data)
    } catch (error) {
      console.log('error getting days for that users program, user.saga')
    }
}


function* userProgramSaga () {
    yield takeLatest('FETCH_PROGRAM_DAYS', fetchProgramDays);
    yield takeLatest('FETCH_PROGRAM_WEEKS', fetchProgramWeeks);
}

export default userProgramSaga;