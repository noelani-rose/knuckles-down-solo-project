const weekCompleteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXERCISE_STATUS':
            return action.payload;
        default:
            return state
    }
}

export default weekCompleteReducer;