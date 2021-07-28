import { applyMiddleware, compose, createStore } from "redux"

import { offline } from "@redux-offline/redux-offline"
import reduxPromiseMW from "redux-promise-middleware"
import turbineReducer from "./reducers"

const DEFAULT_STORE = {
  currentUser: {
    loginState: "logged-in",
    email: "christophe@delicious-insights.com",
  },
}

const devToolsEnhancer =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (x) => x

export function makeStore(
  initialState = DEFAULT_STORE,
  { shouldPersist = process.env.NODE_ENV !== "test" } = {}
) {
  const enhancers = [applyMiddleware(reduxPromiseMW), devToolsEnhancer]
  if (shouldPersist) {
    enhancers.unshift(offline())
  }

  const enhancer = compose(...enhancers)
  const store = createStore(turbineReducer, initialState, enhancer)

  return store
}

const store = makeStore()

export default store
