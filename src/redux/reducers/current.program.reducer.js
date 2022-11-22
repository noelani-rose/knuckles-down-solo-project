const DEFAULT_STATE = {
  loading: false
}

const currentProgramReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case 'SET_USER_PROGRAM':
        const currentProgram = action.payload[0]
        const newState = { ...state, currentProgram, loading: false }
        return newState;
      case 'START_GET_USER_PROGRAM':
        return {...state, loading: true};
      case 'UNSET_USER':
        return DEFAULT_STATE
      default: 
        return state    
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default currentProgramReducer;