import { createAction } from 'redux-actions'

export const registrationRequested= createAction('REGISTRATION_REQUESTED')
export const registrationSucceeded = createAction('REGISTRATION_SUCCEEDED')
export const registrationFailed = createAction('REGISTRATION_FAILED')
