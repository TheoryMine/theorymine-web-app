import { connect } from 'react-redux'

import { getFormStatus } from "./formsSelectors"
import ValidatingButton from "./ValidatingButton"

export const mapStateToProps = (state, ownProps) => {
  return {
    formStatus: getFormStatus(ownProps.formId)(state),
  }
}

const ValidatingButtonContainer = connect(mapStateToProps, null)(ValidatingButton)
export default ValidatingButtonContainer

