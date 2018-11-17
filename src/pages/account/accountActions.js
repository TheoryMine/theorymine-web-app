import { createAction } from 'redux-actions'

export const getUserTheoremsRequested = createAction('GET_USER_THEOREMS_REQUESTED')
export const getUserTheoremsSucceeded = createAction('GET_USER_THEOREMS_SUCCEEDED')
export const getUserTheoremsFailed = createAction('GET_USER_THEOREMS_FAILED')
