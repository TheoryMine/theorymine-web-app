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
    onSubmit: () => dispatch(formSubmitted({
      formId: ownProps.formId,
      nextAction: ownProps.onSubmitAction,
      onSuccessAction: ownProps.onSuccessAction || null,
      onFailureAction: ownProps.onFailureAction || null,
    }))
  }
}

const ValidatingFormContainer = connect(mapStateToProps, mapDispatchToProps)(ValidatingForm)
export default ValidatingFormContainer

