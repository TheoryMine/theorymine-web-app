import { watchForRedirect } from "../common/navigation/navigationSagas"
import { watchForCheckoutRequested } from "../pages/Checkout/checkoutSagas"
import { watchForFormSubmitted } from "../common/forms/formsSagas"
import { watchForLoginRequested, watchForRegisterRequested } from "../pages/Session/sessionSagas"
import { watchForGetTheoremsRequested } from "../pages/account/accountSagas"

export default function* () {
  yield [
    watchForRedirect(),
    watchForCheckoutRequested(),
    watchForFormSubmitted(),
    watchForRegisterRequested(),
    watchForLoginRequested(),
    watchForGetTheoremsRequested()
  ];
}
