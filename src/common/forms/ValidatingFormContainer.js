import { connect } from 'react-redux'

import { formSubmitted } from "./formsActions"
import ValidatingForm from "./ValidatingForm"

export const mapStateToProps = (state, ownProps) => {
  return {}
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: () => dispatch(formSubmitted({ nextAction: ownProps.onSubmitAction, formId: ownProps.formId }))
  }
}

const ValidatingFormContainer = connect(mapStateToProps, mapDispatchToProps)(ValidatingForm)
export default ValidatingFormContainer

