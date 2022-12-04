/** @format */

// import { BUY_CAKE } from './caketypes'
// export function buyCake() {
//   return {
//     type: BUY_CAKE
//   }
// }

//196
import { BUY_CAKE } from './caketypes'
export function buyCake(numbers = 1) {
  return {
    type: BUY_CAKE,
    payload: numbers
  }
}
