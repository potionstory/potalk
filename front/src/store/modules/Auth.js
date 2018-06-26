import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import update from 'react-addons-update';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const LOGIN = 'auth/LOGIN';
const JOIN = 'auth/JOIN';

export const login = createAction(LOGIN, data => axios.post('/auth/login', data));
export const join = createAction(JOIN, data => axios.post('/auth/join', data));

const init = {
  isLogined: false,
  id: null,
  code: null
};

export default handleActions({
  ...pender({
    type: LOGIN,
    onSuccess: (state, action) => {
      console.log('LOGIN');
      const { payload: { data } } = action;

      return state = {
        isLogined: true,
        id: data.id
      };
    },
    onFailure: (state, action) => {
      console.log('LOGIN FAILURE');
      const { payload: { response: { data } } } = action;

      return state = {
        code: data.code
      };
    }
  }),
  ...pender({
    type: JOIN,
    onSuccess: (state, action) => {
      console.log('JOIN');

      return state;
    },
    onFailure: (state, action) => {
      console.log('JOIN FAILURE');
      const { payload: { response: { data } } } = action;

      return state = {
        code: data.code
      };
    }
  })
}, init);