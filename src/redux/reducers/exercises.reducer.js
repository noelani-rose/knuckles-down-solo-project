const exercisesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROGRAM_EXERCISES':
        return action.payload    
    }
    return state;
  };
  export default exercisesReducer;