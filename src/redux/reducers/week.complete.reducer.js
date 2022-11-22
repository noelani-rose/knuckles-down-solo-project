const weekCompleteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WEEK_COMPLETE':
            return action.payload;
        default:
            return state
    }
}

export default weekCompleteReducer;