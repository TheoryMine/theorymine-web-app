import { connect } from 'react-redux'

import { Validating } from "./Validating"
import { fieldChanged, fieldInitialised, validateFieldValue } from "./formsActions"
import { getFormFieldNotification, isFormsFieldValidOrNotPresent } from "./formsSelectors"

export const mapStateToProps = (state, ownProps) => {
  return {
    isValid: isFormsFieldValidOrNotPresent({ formName: ownProps.formId, fieldName: ownProps.id })(state),
    notification: getFormFieldNotification({ formName: ownProps.formId, fieldName: ownProps.id })(state),
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInitialization: field => dispatch(fieldInitialised({
      formName: ownProps.formId, fieldName: ownProps.id,
      validators: ownProps.validators,
    })),
    recordValue: newValue => {
      dispatch(fieldChanged({
        formName: ownProps.formId, fieldName: ownProps.id,
        newValue
      }))
    },
    validateValue: field => {
      dispatch(validateFieldValue({ formName: ownProps.formId, fieldName: ownProps.id }))
    },
  }
}

const ValidatingContainer = WrappedComponent =>
  connect(mapStateToProps, mapDispatchToProps)(Validating(WrappedComponent))
export default ValidatingContainer
