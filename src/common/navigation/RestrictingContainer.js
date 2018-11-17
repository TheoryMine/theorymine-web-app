import { connect } from 'react-redux'

import { Restricting } from "./Restricting"
import { isLoggedIn } from "../../pages/Session/sessionSelectors"
import { redirect } from "./navigationActions"
import { hasNamedTheorem } from "../../pages/Checkout/checkoutSelectors"
import { hasAppLoaded } from "../utils/rehidrationSelectors"

export const mapStateToProps = state => {
  return {
    isLoggedIn: isLoggedIn(state),
    isNotLoggedIn: !isLoggedIn(state),
    hasNamedTheorem: hasNamedTheorem(state),
    loaded: hasAppLoaded(state)
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
