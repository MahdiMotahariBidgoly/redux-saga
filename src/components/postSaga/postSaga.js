/** @format */

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostRequest } from '../../redux/posts/postActions'
const PostSaga = () => {
  const [postId, setPostId] = useState('')
  const { loading, error, data } = useSelector(state => state.post)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Redux-saga middleware</h1>
      <input
        type='text'
        value={postId}
        onChange={e => setPostId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostRequest(postId || 1))}>
        getPost
      </button>

      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : data.title ? (
        <div>
          <p>post title:{data.title}</p>
          <p>post body:{data.body}</p>
        </div>
      ) : (
        <p>Fetch post </p>
      )}
    </>
  )
}

export default PostSaga
