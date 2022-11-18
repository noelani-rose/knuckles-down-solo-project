const currentProgramReducer = (state = [], action) => {
    console.log('in the current program reducer')
    switch (action.type) {
      case 'SET_CURRENT_PROGRAM':
        return action.payload    
    }
    console.log('what is the action payload here????', action.payload)
    return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default currentProgramReducer;