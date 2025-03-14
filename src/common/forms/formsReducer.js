import { handleActions } from 'redux-actions'
import { isNil } from 'lodash'
import {
  fieldChanged, fieldInitialised, formFailed, formSubmitted, formSucceeded,
  validateFieldValue
} from "./formsActions"
import { notificationLevels } from './formFieldValidators'
import { formStatuses } from "./formsAndFieldsConstants"

const initialState = { }
const updateOneField = (form, fieldToUpdate, toUpdateValues) => {
  const fields = form.fields || {}
  const fieldSoFar = fields[ fieldToUpdate ] || {}
  return {
    ...fields,
    [fieldToUpdate]: { ...fieldSoFar, ...toUpdateValues }
  }
}

export const formsReducer = handleActions(
  {
    [fieldInitialised]: (state, action) => {
      const formName = action.payload.formName
      const fieldName = action.payload.fieldName
      const formSoFar = state[ formName ] || {}

      const fieldNewValues = {
        validators: action.payload.validators || [],
        notification: null,
        value: action.payload.value || null,
        isValid: null,
      }

      return {
        ...state,
        [formName]: {
          ...formSoFar,
          isFormValid: null,
          formNotification: null,
          fields: updateOneField(formSoFar, fieldName, fieldNewValues)
        }
      }
    },

    [fieldChanged]: (state, action) => {
      const formName = action.payload.formName
      const fieldName = action.payload.fieldName
      const formSoFar = state[ formName ] || {}

      const fieldNewValues = {
        value: action.payload.newValue,
        isValid: null,
        notification: null,
      }

      return {
        ...state,
        [formName]: {
          ...formSoFar,
          isFormValid: null,
          formNotification: null,
          fields: updateOneField(formSoFar, fieldName, fieldNewValues)
        }
      }

    },
    [validateFieldValue]: (state, action) => {
      const formName = action.payload.formName
      const fieldName = action.payload.fieldName
      const formSoFar = state[ formName ] || {}
      const fieldSoFar = formSoFar.fields ? formSoFar.fields[ fieldName ] || {} : {}

      const validators = fieldSoFar.validators || []
      const value = fieldSoFar.value || null
      const validatorsResults = validators.map(v => v(value, formSoFar.fields))
      const firstInvalidValidator = validatorsResults.find(r => !r.isValid)
      const isFieldValid = isNil(firstInvalidValidator)

      const fieldNewValues = {
        isValid: isFieldValid,
        notification: firstInvalidValidator ? {
          message: firstInvalidValidator.message,
          level: firstInvalidValidator.level
        } : null
      }

      const isFormValid = isNil(formSoFar.isFormValid) ? isFieldValid : formSoFar.isFormValid && isFieldValid

      return {
        ...state,
        [formName]: {
          ...formSoFar,
          isFormValid,
          fields: updateOneField(formSoFar, fieldName, fieldNewValues)
        }
      }

    },
    [formFailed]: (state, action) =>  {
      const formName = action.payload.formId
      const notification = action.payload.notification || {}
      const formSoFar = state[ formName ] || {}
      return {
        ...state,
        [formName]: {
          ...formSoFar,
          status: formStatuses.failed,
          isFormValid: false,
          formNotification: {message: notification.message, level: notification.level},
        }
      }
    },
    [formSucceeded]: (state, action) =>  {
      const formName = action.payload.formId
      const formSoFar = state[ formName ] || {}
      return {
        ...state,
        [formName]: {
          ...formSoFar,
          status: formStatuses.success,
          isFormValid: true,
          formNotification: null,
        }
      }
    },
    [formSubmitted]: (state, action) =>  {
      const formName = action.payload.formId
      const formSoFar = state[ formName ] || {}
      return {
        ...state,
        [formName]: {
          ...formSoFar,
          status: formStatuses.inProgress,
          isFormValid: null,
          formNotification: null,
        }
      }
    },
  },
  initialState
)
