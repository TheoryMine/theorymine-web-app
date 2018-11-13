import { createSelector } from 'reselect'
import memoize from 'memoizee'

import { isNil } from 'lodash'

export const getForms = state => state.forms
export const getForm = formName => createSelector([ getForms ], f => {
  console.log('******form', f);
  return f[ formName ] || null
})

export const getFormsField = ({ formName, fieldName }) => createSelector([ getForm(formName) ], f => f ? f[ fieldName ] : null)
export const getFormFieldValue = ({ formName, fieldName }) => createSelector([ getFormsField({
  formName,
  fieldName
}) ], f => (f ? f.value : null))

export const getFormFieldValidity = ({ formName, fieldName })  =>
  createSelector([ getFormsField({
    formName,
    fieldName
  }) ], f => {
  console.log('******field', f);
  return (f ? f.isValid : null)
  })

export const isFormsFieldValidOrNotPresent =  ({ formName, fieldName })  =>
  createSelector([ getFormFieldValidity({
    formName,
    fieldName
  }) ], v => isNil(v) || v)


export const getFormFieldNotification = ({ formName, fieldName })  =>
  createSelector([ getFormsField({
    formName,
    fieldName
  }) ], f => (f ? f.notification : null))

