
import { isEmpty, isNil } from 'lodash'
import { local } from "../utils/localization"


const notificationLevels = {
  error: 'ERROR',
  warning: 'WARNING',
}

export const formFieldValidators = {
  isNotEmpty: fieldValue => ({
    name: 'is-not-empty',
    isValid: !isNil(fieldValue) && !isEmpty(fieldValue),
    message: local['err_empty'],
    level: notificationLevels.error
  }),
}
