import { put, takeLatest, call } from 'redux-saga/effects'
import { checkoutFailed, checkoutRequested, checkoutSucceeded } from "./checkoutActions"

export function* checkout (action) {
  const stripe = action.payload.stripeClient
  try {
    const { token } = yield call(stripe.createToken, { name: "CHANGE ME" })
    console.log('******TOKEN', token);
    if (token) {
      yield put(checkoutSucceeded())
    }
  }
  catch (error) {
    console.log('******ERROR:', error);
    yield put(checkoutFailed())
  }
}

export function* watchForCheckoutRequested () {
  yield takeLatest(checkoutRequested, checkout)
}
