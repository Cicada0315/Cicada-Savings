const authReducer = (state = {currentUser: {}}, action) => {
    switch (action.type) {
      case 'LOG_IN':
        localStorage.setItem('userinfo', JSON.stringify({ ...action.data }));
        return { ...state, currentUser: action.data}
      case 'SIGN_OUT':
        return {...state, currentUser: {}}
      case 'ADD_ACCOUNT':
        return {...state, currentUser: {...state.currentUser, account: action.payload}}
      default:
        return state;
    }
  };
  
export default authReducer;