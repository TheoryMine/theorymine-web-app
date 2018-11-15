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
    isValid: !fieldValue ||  fieldValue.length >= 8,
    message: local[ 'register_too_short' ],
    level: notificationLevels.error
  }),
  passwordHasNumbers: fieldValue => ({
    name: 'long-enough-password',
    isValid: !fieldValue || /\d/.test(fieldValue),
    message: local[ 'register_no_numbers' ],
    level: notificationLevels.error
  }),
  passwordHasLetters: fieldValue => ({
    name: 'long-enough-password',
    isValid: !fieldValue || /[a-zA-Z]/.test(fieldValue),
    message: local[ 'register_no_letters' ],
    level: notificationLevels.error
  }),
  tAndCAccepted: fieldValue => ({
    name: 'tandcaccepted',
    isValid: fieldValue,
    message: local[ 'err_accept_t_anc_c' ],
    level: notificationLevels.error
  })
}
