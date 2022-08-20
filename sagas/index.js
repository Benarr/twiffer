import React from 'react';
import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';


// saga-generator
export default function* rootSaga() {
  yield all([
    fork(postSaga), // call
    fork(userSaga),
  ]);
};


// call vs fork
// call: 동기 함수 호출 > login api가 return 할때까지 기다려서 return에 넣어줌
// fork: 비동기 함수 호출 > 요청 보내고 바로 다음코드가 실행 (non-blocking)