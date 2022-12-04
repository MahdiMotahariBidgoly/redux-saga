/** @format */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

//197 && 198
const UserContainer = () => {
  const userData = useSelector(state => state.user)
  const { users, loading, error } = userData
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  const renderUsers = () => {
    if (loading) return <p>Loading...</p>
    if (!loading && error) return <p>{error.message}</p>
    if (userData && users.length)
      return (
        <div>
          <h2>User List</h2>
          {users.map(user => (
            <p key={user.id}>{` user: ${user.name}, email: ${user.email}`}</p>
          ))}
        </div>
      )
  }
  return <div>{renderUsers()}</div>
}

export default UserContainer

// return (
//   // <div>users...</div>
//   <div>
//     {loading ? (
//       <p>Loading ... </p>
//     ) : error ? (
//       <p>error.message</p>
//     ) : (
//       userData &&
//       users &&
//       users.length && (
//         <div>
//           <h2>USER LIST:</h2>
//           {users.map(user => (
//             <p key={user.id}>{` user: ${user.name}, email: ${user.email}`}</p>
//           ))}
//         </div>
//       )
//     )}
//   </div>
// )
