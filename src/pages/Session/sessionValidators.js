import { local } from "../../common/utils/localization"
import { notificationLevels } from "../../common/forms/formFieldValidators"
import { fieldNames } from "../../common/forms/formsAndFieldsConstants"

export const sessionValidators = {
  matchesOtherPassword: (fieldValue, otherFields) => ({
    name: 'matching-passwords',
    isValid: fieldValue == otherFields[ fieldNames.password ].value,
    message: local[ 'register_mismatch' ],
    level: notificationLevels.error
  }),
  passwordLongEnough: fieldValue => ({
    name: 'long-enough-password',
    isValid: fieldValue.length >= 8,
    message: local[ 'register_too_short' ],
    level: notificationLevels.error
  }),
  passwordHasNumbers: fieldValue => ({
    name: 'long-enough-password',
    isValid: /\d/.test(fieldValue),
    message: local[ 'register_no_numbers' ],
    level: notificationLevels.error
  }),
  passwordHasLetters: fieldValue => ({
    name: 'long-enough-password',
    isValid: /[a-zA-Z]/.test(fieldValue),
    message: local[ 'register_no_letters' ],
    level: notificationLevels.error
  })
}
