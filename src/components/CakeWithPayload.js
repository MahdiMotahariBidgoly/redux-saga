/** @format */

//196
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
const CakeWithPayload = props => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  const [numbers, setNumbers] = useState(1)
  return (
    <div>
      <h2>number of cakes- {numOfCakes}</h2>
      <input type='text' onChange={e => setNumbers(e.target.value)} />
      <button onClick={() => dispatch(buyCake(numbers))}>
        buy{numbers}cake
      </button>
    </div>
  )
}
export default CakeWithPayload
