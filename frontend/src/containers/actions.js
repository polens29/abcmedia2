import {
	REQUEST_ALL_DATA,
	ALL_DATA_SUCCESS,
  REQUEST_DELETE_CONTACT,
  REQUEST_EDIT_CONTACT,
  REQUEST_ADD_CONTACT
} from './constants'


export function getAllData(){
  return {
    type: REQUEST_ALL_DATA
  }
}

export function getAllDataSuccess(response){
  return {
    type: ALL_DATA_SUCCESS,
    response
  }
}

export function requestAddContact(payload){
  return {
    type: REQUEST_ADD_CONTACT,
    payload
  }
}

export function requestDeleteContact(id){
  return {
    type: REQUEST_DELETE_CONTACT,
    id
  }
}


export function requestEditContact(payload){
  return {
    type: REQUEST_EDIT_CONTACT,
    payload
  }
}