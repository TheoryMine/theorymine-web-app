import { createAction } from 'redux-actions'

export const registrationRequested= createAction('REGISTRATION_REQUESTED')
export const registrationSucceeded = createAction('REGISTRATION_SUCCEEDED')
export const registrationFailed = createAction('REGISTRATION_FAILED')

export const loginRequested= createAction('LOGIN_REQUESTED')
export const loginSucceeded = createAction('LOGIN_SUCCEEDED')
export const loginFailed = createAction('LOGIN_FAILED')

export const logoutSucceeded = createAction('LOGOUT_SUCCEEDED')
