import { connect } from 'react-redux'

import { formSubmitted } from "./formsActions"
import ValidatingForm from "./ValidatingForm"
import { getFormNotification, getFormValidity } from "./formsSelectors"

export const mapStateToProps = (state, ownProps) => {
  return {
    isFormValid: getFormValidity(ownProps.formId)(state),
    notification: getFormNotification(ownProps.formId)(state),
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: () => dispatch(formSubmitted({ nextAction: ownProps.onSubmitAction, formId: ownProps.formId }))
  }
}

const ValidatingFormContainer = connect(mapStateToProps, mapDispatchToProps)(ValidatingForm)
export default ValidatingFormContainer

