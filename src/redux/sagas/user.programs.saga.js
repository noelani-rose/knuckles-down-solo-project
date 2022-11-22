import { ControlPointSharp } from '@mui/icons-material';
import axios from 'axios';
import { put, take, takeLatest } from 'redux-saga/effects';


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


function* fetchProgramExercises (action) {
  // console.log('in the fetch program exercises function with payload', action.payload,)
  try{
 
  const response = yield axios.get (`/api/exercises/program/${action.payload.programId}/week/${action.payload.weekId}/day/${action.payload.dayId}`, config)

  yield put({ type: 'SET_PROGRAM_EXERCISES', payload: response.data})
  console.log('what exercises am i getting back from server, on saga page?', response.data) 
  } catch (error) {
      console.log('error getting exercises for that day back',error)
  }
}

function* updateExerciseStatus (action) {
  try{
    const response = yield axios.put('/api/exercises/update', action.payload, config)
    yield put({ type: 'FETCH_EXERCISE_STATUS', payload: response.data })
  } catch (error) {
    console.log('error updating exercise status', error)
  }
}

function* fetchExerciseStatus () {
  try{
    console.log('trying to fetch exercise status in the SAGA')
    const response = yield axios.get ('/api/exercises/update', config)
    yield put({type: 'SET_EXERCISE_STATUS', payload: response.data})
  } catch (error) {
    console.log('error getting exercise status in the SAGA', error)
  }

}

function* addDayComplete (action) {
  try{

    const response = yield axios.post('/api/user/program/dayComplete', action.payload, config)
    yield put({type: 'FETCH_DAY_COMPLETE'})
  } catch (error) {
    console.log('error adding the day complete, at saga', error)
  }
}

function* fetchDayComplete () {
  try{
    const response = yield axios.get('/api/complete', config)
    yield put({type: 'SET_DAY_COMPLETE', payload: response.data})
  } catch (error) {
    console.log('error fetching day complete', error)
  }
}
// can probably be deleted
function* addWeekComplete (action) {
  try{

    console.log('in addweekcomplete function in saga with payload', action.payload)
    yield axios.post ('/api/user/program/weekComplete', action.payload, config)
    yield put ({type: 'FETCH_WEEK_COMPLETE'})
  } catch (error) {
    console.log('error adding the week complete at saga', error)
  }
}

function* fetchWeekComplete () {
  try{
    console.log('in fetchweekcomplete function at saga')
    const response = yield axios.get ('api/complete/week', config)
    yield put({type: 'SET_WEEK_COMPLETE', payload: response.data})
  } catch (error) {
    console.log('error fetching week complete at saga', error)
  }
}

function* userProgramSaga () {
    yield takeLatest('FETCH_PROGRAM_DAYS', fetchProgramDays);
    yield takeLatest('FETCH_PROGRAM_WEEKS', fetchProgramWeeks);
    yield takeLatest('FETCH_PROGRAM_EXERCISES', fetchProgramExercises);
    yield takeLatest('UPDATE_EXERCISE_STATUS', updateExerciseStatus);
    yield takeLatest('FETCH_EXERCISE_STATUS', fetchExerciseStatus);
    yield takeLatest('ADD_DAY_COMPLETE', addDayComplete);
    yield takeLatest('FETCH_DAY_COMPLETE', fetchDayComplete);
    yield takeLatest('ADD_WEEK_COMPLETE', addWeekComplete)
    yield takeLatest('FETCH_WEEK_COMPLETE', fetchWeekComplete)
;}

export default userProgramSaga;



