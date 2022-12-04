/** @format */

import {
  FETCH_Posts_REQUEST,
  FETCH_Posts_FAILURE,
  FETCH_Posts_SUCCESS
} from './postTypes'

const initialState = {
  loading: false,
  data: {},
  error: ''
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_Posts_REQUEST:
      return { ...state, loading: true }
    case FETCH_Posts_FAILURE:
      return { loading: false, error: action.payload, data: [] }
    case FETCH_Posts_SUCCESS:
      return { loading: false, error: '', data: action.payload }
    default:
      return state
  }
}

export default postReducer
