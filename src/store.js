import { createStore } from "redux"
import turbineReducer from "./reducers"

const DEFAULT_STORE = {  currentUser: {
    loginState: 'logged-in',
    email: 'christophe@delicious-insights.com',
  },}
const enhancer =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (x) => x

export function makeStore(initialState = DEFAULT_STORE) {
  const store = createStore(turbineReducer, initialState, enhancer)

  return store
}

const store = makeStore()

export default store
