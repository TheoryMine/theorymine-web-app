import { connect } from 'react-redux'
import { redirect } from "../../common/navigation/navigationActions"
import NavigationTab from "./NavigationTab"

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToNextPage: () => dispatch(redirect({ to: ownProps.redirectTo })),
  }
}

const NavigationTabContainer = connect(null, mapDispatchToProps)(NavigationTab)
export default NavigationTabContainer
