import {createAction, createReducer} from 'redux-act';
import {call, takeLatest, put, select} from 'redux-saga/effects';
import store from '../store';


export const getDataList = createAction('GET_DATA_LIST');
export const setDataList = createAction('SET_DATA_LIST');

const initialState = {
  dataList: [],
};

const getDataListSaga = function* (action) {
  const headers = {};
  headers['x-api-key'] = 'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch';

  fetch(
    'https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/fundraising?limit=' +
      action.payload.limit +
      '&pagination=' +
      action.payload.pagination,
    {
      method: 'GET',
      headers: headers,
    },
  )
    .then(response => response.json())
    //If response is in json then in success
    .then(responseJson => {
      //Success
      if (responseJson.data != null) {
        store.dispatch(setDataList(responseJson.data));
      } else {
        alert('Error');
      }
      console.log(responseJson);
    })
    .catch(error => {
      //Error
      alert('Error');
      console.error(error);
    });
};

export const togetherWeRootSaga = function* () {
  yield takeLatest(getDataList, getDataListSaga);
  
};

export const togetherWeReducer = createReducer(
  {
    [setDataList]: (state, payload) => {
      return {...state, dataList: [...payload]};
    },
  },

  initialState,
);
