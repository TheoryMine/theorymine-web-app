import { connect } from 'react-redux'

import { Restricting } from "./Restricting"
import { isLoggedIn } from "../../pages/Session/sessionSelectors"
import { redirect } from "./navigationActions"

export const mapStateToProps = state => {
  return {
    isLoggedIn: isLoggedIn(state),
    isNotLoggedIn: !isLoggedIn(state)
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    redirectTo: to => dispatch(redirect({ to }))
  }
}

const RestrictingContainer = wrapped =>
  connect(mapStateToProps, mapDispatchToProps)(Restricting(wrapped))
export default RestrictingContainer
