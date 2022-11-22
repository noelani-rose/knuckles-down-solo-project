const DEFAULT_STATE = {
    weeks: [],
    loading: false
}

const weekReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_PROGRAM_WEEKS':
            const weeks = action.payload
            const newState = { ...state, weeks, loading: false }
            return newState;
        case 'START_GET_USER_PROGRAM':
        case 'START_GET_USER_WEEKS':
            return {...state, loading: true};
        default:
            return state
    }
}

export default weekReducer;
