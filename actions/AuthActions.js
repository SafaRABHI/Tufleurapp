import {
LOGIN_ATTEMPT,
LOGIN_SUCCESS,
LOGIN_FAILED 
} from  'aut/actions/types';

import axios from 'axios';

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_ATTEMPT });

    //Call the back-end API
    //Please do not spam/abuse it so others can use it as well.
    axios.post('https://mean-app-tutorial.herokuapp.com/users/auth',
    { email: username, password })
      .then(resp => handleResponse(dispatch, resp.data))
      .catch(error => console.error(error));

  };
}

const handleResponse = (dispatch, data) => {
  if (!data.success) {
    onLoginFailed(dispatch, data.message);
  }else {
    onLoginSuccess(dispatch, data.user, data.token)
    console.log(data.token)
    //console.log(data.user)
  }
}

const onLoginSuccess = (dispatch, user, token) => {
dispatch({ type: LOGIN_SUCCESS, user })

};

const onLoginFailed = (dispatch, errorMessage) => {
  dispatch({ type: LOGIN_FAILED, error: errorMessage})
};
