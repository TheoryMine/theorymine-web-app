import { createSelector } from 'reselect'
import memoize from 'memoizee'

import { isNil } from 'lodash'

export const getForms = state => state.forms
export const getForm = formName => createSelector([ getForms ], f => f[ formName ] || null)

export const getFormValidity = formName => createSelector([ getForm(formName) ], f => f && f.isFormValid)

export const getFormFields = formName => createSelector([ getForm(formName) ], f => (f && f.fields) || {})
export const getFormFieldsNames = formName => createSelector([ getFormFields(formName) ], f => Object.keys(f))

export const getFormField = ({ formName, fieldName }) => createSelector([ getFormFields(formName) ], f => f ? f[ fieldName ] : null)
export const getFormFieldValue = ({ formName, fieldName }) => createSelector([ getFormField({
  formName,
  fieldName
}) ], f => (f ? f.value : null))

export const getFormFieldValidity = ({ formName, fieldName })  =>
  createSelector([ getFormField({
    formName,
    fieldName
  }) ], f => (f ? f.isValid : null))

export const isFormFieldValidOrNotPresent =  ({ formName, fieldName })  =>
  createSelector([ getFormFieldValidity({
    formName,
    fieldName
  }) ], v => isNil(v) || v)


export const getFormFieldNotification = ({ formName, fieldName })  =>
  createSelector([ getFormField({
    formName,
    fieldName
  }) ], f => (f ? f.notification : null))

