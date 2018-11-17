import { handleActions } from 'redux-actions'
import { getUserTheoremsSucceeded } from "./accountActions"
const initialState = { }

export const accountReducer = handleActions(
  {
    [getUserTheoremsSucceeded]: (state, action) => ({
      ...state,
      ...(action.payload && action.payload.body)
    })
  },
  initialState
)

