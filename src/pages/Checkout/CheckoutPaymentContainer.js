import { connect } from 'react-redux'
import CheckoutPayment from "./CheckoutPayment"
import { checkoutRequested } from "./checkoutActions"
import { getTheoremName } from "./checkoutSelectors"

export const mapStateToProps = state => {
  return {
    theoremName: getTheoremName(state),
  }
}


const CheckoutContainer = connect(mapStateToProps, null)(CheckoutPayment)
export default CheckoutContainer
