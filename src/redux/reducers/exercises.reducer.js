const exercisesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROGRAM_EXERCISES':
        return action.payload;
      default:
        return state    
    }
  };
  export default exercisesReducer;