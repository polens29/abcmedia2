import { put, takeLatest, all, call } from 'redux-saga/effects';
import {
  REQUEST_ALL_DATA,
  REQUEST_EDIT_CONTACT,
  REQUEST_DELETE_CONTACT,
  REQUEST_ADD_CONTACT
} from './constants'
import {
  getAllDataSuccess
} from './actions';

import { message } from 'antd';


const server_url = "http://127.0.0.1:8000/"

function getAllDataAPI(payload){
	let url = server_url + "contacttracing/";
	return fetch(url, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {throw error})
}

function* getAllDataFlow(action) {
	let result = yield call(getAllDataAPI);
  yield put({ type: "ALL_DATA_SUCCESS", data: result });
}

function addDataAPI(payload){
  let url = server_url + "contacttracing/";
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {message.error('Something went wrong');})
}

function* getAddFlow(action) {
  let result = yield call(addDataAPI, action.payload);
  message.success('Successfully added contact');
  yield put({ type: "ALL_DATA_SUCCESS", data: result });
}

function editDataAPI(payload){
  let url = server_url + "contacttracing/";
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {message.error('Something went wrong');})
}

function* getEditFlow(action) {
  let result = yield call(editDataAPI, action.payload);
  message.success('Successfully edited contact');
  yield put({ type: "ALL_DATA_SUCCESS", data: result });
}

function deleteAPI(id){
  let url = server_url + "contacttracing/";
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'id': id
    })
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {throw error})
}


function* getDeleteFlow(action) {
  let result = yield call(deleteAPI, action.id);
  message.success('Successfully deleted contact');
  yield put({ type: "ALL_DATA_SUCCESS", data: result });
}


function* actionWatcher() {
  yield takeLatest(REQUEST_ALL_DATA, getAllDataFlow);
  yield takeLatest(REQUEST_ADD_CONTACT, getAddFlow);
  yield takeLatest(REQUEST_EDIT_CONTACT, getEditFlow);
  yield takeLatest(REQUEST_DELETE_CONTACT, getDeleteFlow);
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}