import { handleActions } from 'redux-actions'
import { isNil } from 'lodash'
import { fieldChanged, fieldInitialised, validateFieldValue } from "./formsActions"

const initialState = { }

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
      const validatorsResults = validators.map(v => v(value))
      const firstInvalidValidator = validatorsResults.find(r => !r.isValid)
      const isFieldValid = isNil(firstInvalidValidator)

      const fieldNewValues = {
        isValid: isFieldValid,
        notification: firstInvalidValidator ? {
          message: firstInvalidValidator.message,
          level: firstInvalidValidator.level
        } : null
      }

      return {
        ...state,
        [formName]: {
          ...formSoFar,
          isFormValid: isNil(formSoFar.isFormValid) ? isFieldValid : formSoFar.isFormValid && formSoFar.isFormValid,
          fields: updateOneField(formSoFar, fieldName, fieldNewValues)
        }
      }

    },
  },
  initialState
)

const updateOneField = (form, fieldToUpdate, toUpdateValues) => {
  const fields = form.fields || {}
  const fieldSoFar = fields[ fieldToUpdate ] || {}
  return {
    ...fields,
    [fieldToUpdate]: { ...fieldSoFar, ...toUpdateValues }
  }
}