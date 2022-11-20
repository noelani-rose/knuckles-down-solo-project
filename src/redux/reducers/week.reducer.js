const weekReducer = (state = [], action) => {
    console.log('what is the payload in the week reducer', action.payload);
    switch (action.type) {
        case 'SET_PROGRAM_WEEKS':
            return action.payload;
        default:
            return state
    }
}

export default weekReducer;