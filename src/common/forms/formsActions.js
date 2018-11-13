import { createAction } from 'redux-actions'

export const fieldInitialised = createAction('FIELD_INITIALISED')
export const fieldChanged = createAction('FIELD_CHANGED')
export const validateFieldValue = createAction('VALIDATE_FIELD_VALUE')
export const clearFormsField = createAction('CLEAR_FORMS_FIELD')
