import { watchForRedirect } from "../common/navigation/navigationSagas"
import { watchForCheckoutRequested } from "../pages/Checkout/checkoutSagas"
import { watchForFormSubmitted } from "../common/forms/formsSagas"

export default function* () {
  yield [
    watchForRedirect(),
    watchForCheckoutRequested(),
    watchForFormSubmitted()
  ];
}
