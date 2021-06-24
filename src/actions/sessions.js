import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:3001' });

export const userPostFetch = (user) => {
  return dispatch =>{
    return API.post('/users', {
      user: {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        password: user.password
      }
    })
    .then(res=>{
      console.log(res)
      const {data}=res;
      if ("errors" in data){
        alert(data.errors);
      }
      else{
        dispatch({ type: 'LOG_IN', data });
      }
    })
    .catch (error=>console.log(error));   
  } 
};

export const userLoginFetch = (user) => {
  return dispatch =>{
    return API.post('/login', {
      user: {
        username: user.username,
        password: user.password
      }
    })
    .then(res=>{
      console.log(res)
      const {data}=res;
      dispatch({ type: 'LOG_IN', data });
    })
    .catch (error=>console.log(error));   
  } 
};

export const LoggingOut = () => {
  return (dispatch) => {
    dispatch({ type: "SIGN_OUT" });
  };
};