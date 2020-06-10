import { LOGIN_INFO } from '../action';

const INITIAL_STATE = {
  email: '',
  name: '',
  gravatar: '',
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_INFO:
      return {
        ...state,
        email: action.email,
        name: action.name,
        gravatar: action.gravatar,
      };
    default:
      return state;
  }
};

export default login;
