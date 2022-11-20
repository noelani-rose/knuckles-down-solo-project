const journalReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOURNAL_ENTRIES':
            return action.payload;
        default:
            return state
    }
}



export default journalReducer;