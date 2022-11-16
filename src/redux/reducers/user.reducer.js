const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
    case 'SET_USER_PROGRAM':
      return action.payload
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;
