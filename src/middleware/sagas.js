import { watchForRedirect } from "../common/navigation/navigationSagas"
import { watchForCheckoutRequested } from "../pages/Checkout/checkoutSagas"

export default function* () {
  yield [
    watchForRedirect(),
    watchForCheckoutRequested()
  ];
}
