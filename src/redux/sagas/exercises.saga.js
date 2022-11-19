import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
}; 

function* fetchProgramExercises (action) {
  // console.log('in the fetch program exercises function with payload', action.payload,)
  try{
 
  const response = yield axios.get (`/api/exercises/program/${action.payload.programId}/week/${action.payload.weekId}/day/${action.payload.dayId}/exercises`, config)

  yield put({ type: 'SET_PROGRAM_EXERCISES', payload: response.data})
  // console.log('what exercises am i getting back?', response.data) 
  } catch (error) {
      console.log('error getting exercises for that day back',error)
  }
}


function* exercisesSaga() {
  yield takeLatest('FETCH_PROGRAM_EXERCISES', fetchProgramExercises);
}

export default exercisesSaga;
