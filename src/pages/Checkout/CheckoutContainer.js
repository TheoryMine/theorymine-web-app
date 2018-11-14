import { connect } from 'react-redux'
import Checkout from "./Checkout"
import { getTheoremName } from "./checkoutSelectors"

export const mapStateToProps = state => {
  return {
    theoremName: getTheoremName(state),
  }
}


const CheckoutContainer = connect(mapStateToProps, null)(Checkout)
export default CheckoutContainer
