/** @format */

//193
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/icecreamActions'
const HookIceCreamContainer = props => {
  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>number of IceCreams- {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}
export default HookIceCreamContainer
