/** @format */
import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_Posts_REQUEST } from '../posts/postTypes'
import { fetchPostSuccess, fetchPostFailure } from '../posts/postActions'

function* fetchPost(action) {
  try {
    const apiEndPoint = `https://jsonplaceholder.typicode.com/posts/${action.payload}`
    const response = yield call(() => axios.get(apiEndPoint))
    yield put(fetchPostSuccess(response.data))
  } catch (error) {
    yield put(fetchPostFailure(error.message))
  }
}
export function* watchFetchPost() {
  yield takeEvery(FETCH_Posts_REQUEST, fetchPost)
}
