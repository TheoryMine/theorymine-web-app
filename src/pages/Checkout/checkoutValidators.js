import { local } from "../../common/utils/localization"
import { notificationLevels } from "../../common/forms/formFieldValidators"
import { inappropriate } from "../../common/utils/inappropriateList"

export const checkoutValidators = {

  isInappropriate: fieldValue => {
    inappropriate.map(i => (fieldValue.split(' ')).includes(i) ? i : null)
    return {
    name: 'is-inappropriate',
    isValid: !fieldValue || !(inappropriate.some( i => (fieldValue.split(' ')).includes(i) )),
    message: local[ 'name_inappropriate' ],
    level: notificationLevels.error
  }},
}
