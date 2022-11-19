const userProgramReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROGRAM_WEEKS':
            return action.payload;
        case 'SET_PROGRAM_DAYS':
            return [...state, ...action.payload]
        // case 'SET_PROGRAM_EXERCISES':
        //     return action.payload
    }
    return state;
  };

export default userProgramReducer