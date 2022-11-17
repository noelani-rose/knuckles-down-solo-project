import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}


function* addUserProgram (action) {
  console.log('in the adduserprogram function', action.payload)
  try{
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    yield axios.post(`/api/user/`, {data: action.payload}, config);

    yield put({
      type: 'FETCH_USER_PROGRAM'
    })
  } catch (error) {
    console.log('User post user_program_id', error)
  }
}


function* fetchUserProgram () {
  // console.log('in fetch user program function with a payload of', action.payload)
  
  try{
    const response = yield axios.get(`/api/user/program`);
    console.log('am i gettin a response from the server', response)
    yield put({
      type: 'SET_USER_PROGRAM',
      payload: response.data
    })
  } catch (error) {
    console.log('error getting user program back from server', )
  }
}


function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('ADD_USER_PROGRAM', addUserProgram)
  yield takeLatest('FETCH_USER_PROGRAM', fetchUserProgram)  

}

export default userSaga;
