import { connect } from 'react-redux'

import { Validating } from "./Validating"
import { fieldChanged, fieldInitialised, formSubmitted, validateFieldValue } from "./formsActions"
import { getFormFieldNotification, isFormsFieldValidOrNotPresent } from "./formsSelectors"
import ValidatingForm from "./ValidatingForm"

export const mapStateToProps = (state, ownProps) => {
  return {}
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: () => dispatch(formSubmitted({ nextAction: ownProps.onSubmitAction }))
  }
}

const ValidatingFormContainer = connect(mapStateToProps, mapDispatchToProps)(ValidatingForm)
export default ValidatingFormContainer

