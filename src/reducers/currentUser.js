// Types d’actions
// ---------------

const LOGIN_FAILURE = "turbine/currentUser/AUTH_LOGIN_FAILURE"
const LOGIN_START = "turbine/currentUser/AUTH_LOGIN_START"
const LOGIN_SUCCESS = "turbine/currentUser/AUTH_LOGIN_SUCCESS"
const LOGOUT = "turbine/currentUser/AUTH_LOGOUT"

// Réducteur
// ---------

export default function reduceCurrentUser(
  state = { loginState: "logged-out" },
  action
) {
  switch (action.type) {
    case LOGIN_START:
      return { loginState: "pending" }

    case LOGIN_FAILURE:
      return { loginState: "failure" }

    case LOGIN_SUCCESS: {
      const { email } = action.payload
      return { loginState: "logged-in", email }
    }

    case LOGOUT:
      return { loginState: "logged-out", email: "" }

    default:
      return state
  }
}

// Action Creators
// ---------------

export function logIn(email, password) {
  return {
    type: LOGIN_START,
    //payload: { email, password },
    meta: {
      offline: {
        effect: {
          json: { email, password },
          method: "POST",
          url: "https://tubine.sebfox2011.repl.co/api/v1/sessions",
        },
        commit: { type: LOGIN_SUCCESS, payload: { email } },
        rollback: { type: LOGIN_FAILURE },
      },
    },
  }
}

export function logInFailure() {
  return { type: LOGIN_FAILURE }
}

export function logInStart() {
  return { type: LOGIN_START }
}

export function logInSuccess(email) {
  return { type: LOGIN_SUCCESS, payload: { email } }
}

export function logOut() {
  return { type: LOGOUT }
}
