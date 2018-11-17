import { handleActions } from 'redux-actions'
import { REHYDRATE } from 'redux-persist/lib/constants'

const initialState = { }

export const rehidrationReducer = handleActions(
  {
    [REHYDRATE]: state => ({ ...state, isLoaded: true })
  },
  initialState
)

