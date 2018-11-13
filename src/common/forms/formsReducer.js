import { handleActions } from 'redux-actions'
import { isNil } from 'lodash'
import { fieldChanged, fieldInitialised, validateFieldValue } from "./formsActions"


const initialState = {}

export const formsReducer = handleActions(
  {
    [fieldInitialised]: (state, action) => {
      const formName = action.payload.formName
      const fieldName = action.payload.fieldName
      const formSoFar= state[formName]
      return {
        ...state,
        [formName]: {
          ...formSoFar,
          [fieldName]: {
            validators: action.payload.validators || [],
            notification: null,
            value: action.payload.value || null,
            isValid: null,
          },
        }
      }
    },
    [fieldChanged]: (state, action) => {
      const formName = action.payload.formName
      const fieldName = action.payload.fieldName
      const formSoFar= state[formName]
      const fieldSoFar = formSoFar[fieldName]
      if (!isNil(fieldSoFar)) {
        return {
          ...state,
          [formName]: {
            ...formSoFar,
            [fieldName]: {
              ...fieldSoFar,
              value: action.payload.newValue,
              isValid: null,
              notification: null,
            },
          }
        }

      }
      return state
    },
    [validateFieldValue]: (state, action) => {
      const formName = action.payload.formName
      const fieldName = action.payload.fieldName
      const formSoFar= state[formName]
      const fieldSoFar = formSoFar[fieldName]
      const validators = fieldSoFar.validators || []
      const value = fieldSoFar.value || null
      const validatorsResults = validators.map(v => v(value))
      const firstInvalidValidator = validatorsResults.find(r => !r.isValid)
      if (!isNil(fieldSoFar)) {
        return {
          ...state,
          [formName]: {
            ...formSoFar,
            [fieldName]: {
              ...fieldSoFar,
              isValid: isNil(firstInvalidValidator),
              notification: firstInvalidValidator ? {
                message: firstInvalidValidator.message,
                level: firstInvalidValidator.level
              } : null
            }
          }
        }
      }
      return state
    },
  },
  initialState
)

