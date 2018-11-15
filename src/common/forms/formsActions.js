import { createAction } from 'redux-actions'

export const fieldInitialised = createAction('FIELD_INITIALISED')
export const fieldChanged = createAction('FIELD_CHANGED')
export const validateFieldValue = createAction('VALIDATE_FIELD_VALUE')
export const formInvalid = createAction('FORM_INVALID')
export const formValid = createAction('FORM_VALID')
export const formSubmitted = createAction('FORM_SUBMITTED')

