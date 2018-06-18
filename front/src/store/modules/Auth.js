import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import update from 'react-addons-update';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const LOGIN = 'auth/LOGIN';
const JOIN = 'auth/JOIN';

export const login = createAction(LOGIN, data => axios.get('/auth', data));
export const join = createAction(JOIN, data => axios.post('/auth', data));

const init = {
  isLogined: false,
  id: null
};

export default handleActions({
  ...pender({
    type: LOGIN,
    onSuccess: (state, action) => {
      console.log('LOGIN');

      return state;
    }
  }),
  ...pender({
    type: JOIN,
    onSuccess: (state, action) => {
      console.log('JOIN');

      return state;
    }
  })
}, init);