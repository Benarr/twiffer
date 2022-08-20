// import
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';



// reducer : 3) 이전상태와 액션을 통해서 다음 상태를 만들어내는 함수 / (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE :
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };    
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;