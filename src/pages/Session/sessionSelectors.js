import { createSelector } from 'reselect'
import { isNil } from 'lodash'
import { fieldNames, formsNames } from "../../common/forms/formsAndFieldsConstants"
import { getFormFieldValue } from "../../common/forms/formsSelectors"

export const getRegistrationEmail = getFormFieldValue({
  formName: formsNames.register,
  fieldName: fieldNames.email
})
export const getRegistrationFirstName = getFormFieldValue({
  formName: formsNames.register,
  fieldName: fieldNames.firstName
})
export const getRegistrationLastName = getFormFieldValue({
  formName: formsNames.register,
  fieldName: fieldNames.lastName
})
export const getRegistrationPassword = getFormFieldValue({
  formName: formsNames.register,
  fieldName: fieldNames.password
})

export const getRegistrationFormFields =
  createSelector([ getRegistrationEmail, getRegistrationFirstName, getRegistrationLastName, getRegistrationPassword ],
    (email, firstName, lastName, password) => ({ email, first_name: firstName, last_name: lastName, password }))

export const getLoginEmail = getFormFieldValue({
  formName: formsNames.login,
  fieldName: fieldNames.email
})
export const getLoginPassword = getFormFieldValue({
  formName: formsNames.login,
  fieldName: fieldNames.password
})

export const getLoginFormFields =
  createSelector([ getLoginEmail, getLoginPassword, ],
    (email,password) => ({ email, password }))


export const getSession = state => state.session
export const isLoggedIn = createSelector([ getSession ], s => !isNil(s.user_id))
