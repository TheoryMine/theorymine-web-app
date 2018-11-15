import { isEmpty, isNil } from 'lodash'
import { local } from "../utils/localization"

export const notificationLevels = {
  error: 'error',
  warning: 'warning',
}

export const formFieldValidators = {
  isNotEmpty: fieldValue => ({
    name: 'is-not-empty',
    isValid: !isNil(fieldValue) && !isEmpty(fieldValue),
    message: local['err_empty'],
    level: notificationLevels.error
  }),
}
