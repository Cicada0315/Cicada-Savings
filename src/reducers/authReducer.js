const authReducer = (state = {currentUser: {}}, action) => {
    switch (action.type) {
      case 'LOG_IN':
        return {...state, currentUser: action.payload}
      case 'SIGN_OUT':
        return {};
      default:
        return state;
    }
  };
  
export default authReducer;