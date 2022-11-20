const dayReducer = (state = [], action) => {
    console.log('what are the days in the day reducer', action.payload)
    switch (action.type) {
        case 'SET_PROGRAM_DAYS':
            return action.payload;
        default:
            return state
    }
}

export default dayReducer;