const currentProgramReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CURRENT_PROGRAM':
        return action.payload    
    }
    return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default currentProgramReducer;