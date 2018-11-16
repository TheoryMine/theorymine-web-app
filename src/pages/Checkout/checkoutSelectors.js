import { createSelector } from 'reselect'
import { isNil } from 'lodash'
import { fieldNames, formsNames } from "../../common/forms/formsAndFieldsConstants"
import { getFormFieldValue } from "../../common/forms/formsSelectors"

export const getTheoremName = getFormFieldValue({formName: formsNames.discover, fieldName: fieldNames.theoremName})
export const hasNamedTheorem =createSelector([ getTheoremName ], n => !isNil(n))

