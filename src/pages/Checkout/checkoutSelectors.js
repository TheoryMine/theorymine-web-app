import { createSelector } from 'reselect'
import { fieldNames, formsNames } from "../../common/forms/formsAndFieldsConstants"
import { getFormFieldValue } from "../../common/forms/formsSelectors"

export const getTheoremName = getFormFieldValue({formName: formsNames.discover, fieldName: fieldNames.theoremName})

