import { createSelector } from 'reselect'
import { isNil } from 'lodash'
import { fieldNames, formsNames } from "../../common/forms/formsAndFieldsConstants"
import { getFormFieldValue } from "../../common/forms/formsSelectors"

export const getRehidration = state => state.rehidration || {}

export const hasAppLoaded= createSelector([ getRehidration ], r => r.isLoaded)