import { put, takeLatest, call, select } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { checkoutFailed, checkoutRequested, checkoutSucceeded } from "./checkoutActions"
import { api } from "../../common/requests/apiCalls"
import { getTheoremName } from "./checkoutSelectors"
import { notificationLevels } from "../../common/forms/formFieldValidators"
import { pagesUrls } from "../../common/navigation/navigationConstants"
import { makeAuthorisedRequest } from "../../common/requests/requestsSagas"

export function* checkout (action) {
  const stripe = action.payload.stripeClient
  try {
    const user_name = "CHANGE ME"
    const theorem_name = yield select(getTheoremName)
    const { token } = yield call(stripe.createToken, { name: user_name });
    if (token) {
      const response = yield call(makeAuthorisedRequest, { apiCall: api.orderTheorem, body:  {
        'theorem_name': theorem_name,
        'payment_token': token.id
      }})
      if (response.ok) {
        yield put(checkoutSucceeded({ body: response.body }))
        yield put(push(pagesUrls.success))
      } else {
        const notificationMessage = response && response.body ? response.body.message || 'Unknown Error' : 'Unknown Error'
        const formNotification = { message: notificationMessage, level: notificationLevels.error }
        yield put(checkoutFailed({ notification: formNotification }))
      }
    } else {
      const notificationMessage = 'Payment Error. Your payment was not processed correctly.'
      const formNotification = { message: notificationMessage, level: notificationLevels.error }
      yield put(checkoutFailed({ notification: formNotification }))
    }
  }
  catch (error) {
    const formNotification = { message: 'Unknown Error', level: notificationLevels.error }
    yield put(checkoutFailed({ notification: formNotification }))
  }
}

export function* watchForCheckoutRequested () {
  yield takeLatest(checkoutRequested, checkout)
}
