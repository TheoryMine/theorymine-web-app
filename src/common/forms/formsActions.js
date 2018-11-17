import { createAction } from 'redux-actions'

export const fieldInitialised = createAction('FIELD_INITIALISED')
export const fieldChanged = createAction('FIELD_CHANGED')
export const validateFieldValue = createAction('VALIDATE_FIELD_VALUE')
export const formFailed = createAction('FORM_FAILED')
export const formSucceeded = createAction('FORM_SUCCEEDED')
export const formSubmitted = createAction('FORM_SUBMITTED')

