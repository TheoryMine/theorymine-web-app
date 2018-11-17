import { connect } from 'react-redux'
import MyTheorems from "./MyTheorems"
import { getUserTheoremsRequested } from "./accountActions"
import { hasAppLoaded } from "../../common/utils/rehidrationSelectors"
import { getInProgressTheorems, getProcessedTheorems } from "./accountSelectors"

export const mapStateToProps = state => {
  return {
    inProgressTheorems: getInProgressTheorems(state),
    processesTheorems: getProcessedTheorems(state),
    loaded: hasAppLoaded(state)
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onLoadUserTheorems: () => dispatch(getUserTheoremsRequested())
  }
}

const MyTheoremsContainer = connect(mapStateToProps, mapDispatchToProps)(MyTheorems)
export default MyTheoremsContainer
