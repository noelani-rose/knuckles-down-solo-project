const dayCompleteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DAY_COMPLETE':
            return action.payload;
        default:
            return state
    }
}

export default dayCompleteReducer;