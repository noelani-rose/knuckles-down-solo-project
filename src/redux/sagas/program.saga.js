import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};


function* fetchPrograms() {
    console.log('in fetchPrograms function in program.saga')
  try {
    const response = yield axios.get('/api/program/', config);
    console.log('what is the response', response.data)
    
    yield put({ type: 'SET_PROGRAMS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* programSaga() {
  yield takeLatest('FETCH_PROGRAMS', fetchPrograms);
}

export default programSaga;
