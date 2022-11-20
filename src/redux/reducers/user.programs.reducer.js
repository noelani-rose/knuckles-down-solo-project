const userProgramReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROGRAM_WEEKS':
            return action.payload;
        case 'SET_PROGRAM_DAYS':
            return [...state, action.payload]
        case 'SET_PROGRAM_EXERCISES':
            return [...state, action.payload];
        default:
            return state
        // try to mess with this to send the data over more neatly
    }
  };

// export default userProgramReducer


