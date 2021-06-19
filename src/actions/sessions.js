import Axios from 'axios';

export const userPostFetch = user => {
    return dispatch => {
      return Axios.post("http://127.0.0.1:3001/users", {
        user: {
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            password: user.password
        }
      })
      .then(resp => {
        if (resp.message) {
        } else {
          console.log(resp)
          localStorage.setItem("token", resp.data.jwt)
          dispatch(login(resp.data.user))
        }
      })
    }
}

export const login = user => ({
    type: 'LOG_IN',
    payload: user
})