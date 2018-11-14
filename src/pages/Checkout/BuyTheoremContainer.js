import { connect } from 'react-redux'
import { redirect } from "../../common/navigation/navigationActions"
import { pagesUrls } from "../../common/navigation/navigationConstants"
import BuyTheorem from "./BuyTheorem"

export const mapDispatchToProps = dispatch => {
  return {
    goToCheckout: () => dispatch(redirect({ to: pagesUrls.checkout })),
  }
}

const BuyTheoremContainer = connect(null, mapDispatchToProps)(BuyTheorem)
export default BuyTheoremContainer
