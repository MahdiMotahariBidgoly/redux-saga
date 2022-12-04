/** @format */

import {
  FETCH_Posts_FAILURE,
  FETCH_Posts_REQUEST,
  FETCH_Posts_SUCCESS
} from './postTypes'

export const fetchPostRequest = id => {
  return {
    type: FETCH_Posts_REQUEST,
    payload: id
  }
}
export const fetchPostFailure = error => {
  return {
    type: FETCH_Posts_FAILURE,
    payload: error
  }
}
export const fetchPostSuccess = post => {
  return {
    type: FETCH_Posts_SUCCESS,
    payload: post
  }
}

// export const fetchPost = () => {
//   // return  (dispatch) => { as the same as:
//   return function (dispatch) {
//     dispatch(fetchPostRequest())
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//         const posts = res.data
//         dispatch(fetchPostSuccess(posts))
//       })
//       .catch(error => {
//         dispatch(fetchPostFailure(error.message))
//       })
//   }
// }
