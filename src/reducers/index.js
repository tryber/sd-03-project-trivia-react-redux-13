import { combineReducers } from 'redux';

import request from './request';
import login from './login';

const rootReducer = combineReducers({ request, login });

export default rootReducer;
