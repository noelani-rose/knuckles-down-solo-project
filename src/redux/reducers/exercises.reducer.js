const exercisesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROGRAM_EXERCISES':
        return {exercises: action.payload}    
    }
    return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default exercisesReducer;