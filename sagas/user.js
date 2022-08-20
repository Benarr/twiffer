import { all, delay, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios';
import { 
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../reducers/user';


function logInAPI(data) { // generator 아님 주의
  return axios.post('/api/login', data);
};

function* logIn(action) {
  try {
    //const result = yield call(logInAPI, action.data); // yield > await와 유사
    yield delay(1000);
    yield put({ // put > dispatch와 유사
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
};

function logOutAPI() { // generator 아님 주의
  return axios.post('/api/logout');
};

function* logOut() {
  // const result = yield call(logOutAPI);
  try {
    yield put({ // yield > await와 유사
      type: LOG_OUT_REQUEST,
    });
    const result = yield call(logOutAPI);
    yield put({ // put > dispatch와 유사
      type: LOG_OUT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
};

function signUpAPI() { // generator 아님 주의
  return axios.post('/api/signup');
};

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({ // yield > await와 유사
      type: SIGN_UP_REQUEST,
    });
    // const result = yield call(signUpAPI);
    yield put({ // put > dispatch와 유사
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
};


function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
};

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
};

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
};


export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
};