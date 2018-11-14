import { connect } from 'react-redux'
import CheckoutPayment from "./CheckoutPayment"
import { checkoutRequested } from "./checkoutActions"
import { getTheoremName } from "./checkoutSelectors"

export const mapStateToProps = state => {
  return {
    theoremName: getTheoremName(state),
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    checkout: (stripe) => dispatch(checkoutRequested({ stripeClient: stripe })),
  }
}

const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(CheckoutPayment)
export default CheckoutContainer
