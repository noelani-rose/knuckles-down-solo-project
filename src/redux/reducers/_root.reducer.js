import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import program from './program.reducer'
// import userProgram from './user.programs.reducer'
import currentProgram from './current.program.reducer'
import exercises from './exercises.reducer'
import week from './week.reducer'
import day from './day.reducer'


const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  program,
  exercises,
  week,
  day,
  // userProgram, handling weeks, days, and exercises of that user's program
  currentProgram, // handles the user's selected program
});

export default rootReducer;
