import { LOGIN_INFO } from '../action';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  assertions: 0,
  score: 0,
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_INFO:
      return {
        ...state,
        name: action.name,
        gravatarEmail: action.gravatar,
        assertions: action.assertions,
        score: action.score,
      };
    default:
      return state;
  }
};

export default login;
