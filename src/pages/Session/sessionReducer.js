import { handleActions } from 'redux-actions'
import { loginFailed, loginSucceeded, logoutSucceeded, registrationSucceeded } from "./sessionActions"
const initialState = { }

export const sessionReducer = handleActions(
  {
    [registrationSucceeded]: (state, action) => {
      return action.payload && action.payload.body
    },
    [loginSucceeded]: (state, action) => {
      return action.payload && action.payload.body
    },
    [loginFailed]: () => initialState,
    [logoutSucceeded]: () => initialState
  },
  initialState
)

