const currentProgramReducer = (state = [], action) => {
  console.log('what is the state here at current programs reducer', action.payload)
    switch (action.type) {
      case 'SET_CURRENT_PROGRAM':
        return action.payload;
      default:
        return state    
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default currentProgramReducer;