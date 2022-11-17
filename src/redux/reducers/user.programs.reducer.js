const userProgramReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PROGRAM_WEEKS':
        return action.payload
    }
    return state;
  };

export default userProgramReducer