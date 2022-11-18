import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import program from './program.reducer'
import exercises from './exercises.reducer'
import userProgram from './user.programs.reducer'
// import currentProgram from './current.program.reducer'
import currentProgram from './current.program.reducer'


const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  program,
  exercises,
  userProgram,
  currentProgram,
});

export default rootReducer;
