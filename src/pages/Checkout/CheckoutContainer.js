import { connect } from 'react-redux'
import Checkout from "./Checkout"
import { getTheoremName } from "./checkoutSelectors"
import { isLoggedIn } from "../Session/sessionSelectors"

export const mapStateToProps = state => {
  return {
    theoremName: getTheoremName(state),
    isLoggedIn: isLoggedIn(state)
  }
}

const CheckoutContainer = connect(mapStateToProps, null)(Checkout)
export default CheckoutContainer
