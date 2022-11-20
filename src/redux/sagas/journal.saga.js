import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};


function* addJournalEntry(action) {
    console.log('in add journal function in program.saga w/ a payload of', action.payload)
    try {
    const response = yield axios.post('/api/program/journal/', action.payload, config);

    
    yield put({ type: 'FETCH_JOURNAL_ENTRIES', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* fetchJournalEntries () {
    try{
        const response = yield axios.get('/api/program/journal/', config)
        yield put({ type: 'SET_JOURNAL_ENTRIES', payload: response.data})
    } catch(error) {
        console.log('error getting journal entries back from server, in journal saga', error)
    }
}

function* journalSaga() {
  yield takeLatest('ADD_JOURNAL_ENTRY', addJournalEntry);
  yield takeLatest('FETCH_JOURNAL_ENTRIES', fetchJournalEntries)
}
export default journalSaga