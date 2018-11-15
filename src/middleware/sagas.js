import { watchForRedirect } from "../common/navigation/navigationSagas"
import { watchForCheckoutRequested } from "../pages/Checkout/checkoutSagas"
import { watchForFormSubmitted } from "../common/forms/formsSagas"
import { watchForSearchLocationRequested } from "../pages/Session/sessionSagas"

export default function* () {
  yield [
    watchForRedirect(),
    watchForCheckoutRequested(),
    watchForFormSubmitted(),
    watchForSearchLocationRequested()
  ];
}
