import { local } from "../../common/utils/localization"
import { notificationLevels } from "../../common/forms/formFieldValidators"
import { inappropriate } from "../../common/utils/inappropriateList"

export const checkoutValidators = {

  isInappropriate: fieldValue => {
    const aaa = inappropriate.map(i => (fieldValue.split(' ')).includes(i) ? i : null)
    console.log('******', aaa);
    return {
    name: 'is-inappropriate',
    isValid: !fieldValue || !(inappropriate.some( i => (fieldValue.split(' ')).includes(i) )),
    message: local[ 'name_inappropriate' ],
    level: notificationLevels.error
  }},
}
