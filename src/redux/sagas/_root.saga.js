import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import programSaga from './program.saga';
import exercisesSaga from './exercises.saga'
import userProgramSaga from './user.programs.saga';
import currentProgramSaga from './current.program.saga'




export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    programSaga(),
    exercisesSaga(), 
    userProgramSaga(),
    currentProgramSaga()
    
  ]);
}
