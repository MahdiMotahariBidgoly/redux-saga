/** @format */

import './App.css'
import { Provider } from 'react-redux'
// import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import PostSaga from './components/postSaga/postSaga'
// import HookCakeContainer from './components/HookCakeContainer'
// import HookIceCreamContainer from './components/HookIceCreamContainer'
// import CakeWithPayload from './components/CakeWithPayload'
// import UserContainer from './components/UserContainer'
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <CakeContainer />
        <HookCakeContainer />
        <HookIceCreamContainer />
        <CakeWithPayload />
        <UserContainer /> */}
        <PostSaga />
      </div>
    </Provider>
  )
}

export default App
