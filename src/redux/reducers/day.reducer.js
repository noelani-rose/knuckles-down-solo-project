const dayReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROGRAM_DAYS':
            return action.payload

        default:
            return state
    }
}

export default dayReducer;