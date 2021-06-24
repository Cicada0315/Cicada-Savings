const authReducer = (state = {currentUser: {}}, action) => {
    switch (action.type) {
      case 'LOG_IN':
        localStorage.setItem('userinfo', JSON.stringify({ ...action.data }));
        return { ...state, currentUser: action.data}
      case 'SIGN_OUT':
        localStorage.clear();
        return {...state, currentUser: {}}
      default:
        return state;
    }
  };
  
export default authReducer;