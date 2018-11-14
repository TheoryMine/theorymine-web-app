import { connect } from 'react-redux'
import { redirect } from "../../common/navigation/navigationActions"
import Step from "./Step"

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToNextPage: () => dispatch(redirect({ to: ownProps.redirectTo })),
  }
}

const StepContainer = connect(null, mapDispatchToProps)(Step)
export default StepContainer
