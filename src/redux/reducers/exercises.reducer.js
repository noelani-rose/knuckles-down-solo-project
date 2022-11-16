const exercisesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROGRAM_WEEKS':
        return action.payload
        
    }
    console.log('the action payload from program reducer is', )
    return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default exercisesReducer;