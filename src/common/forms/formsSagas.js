import { put, call, takeLatest } from 'redux-saga/effects'
import { formSubmitted } from "./formsActions"

export function* validateFormAndSubmit (action) {
  const onSubmit = action.payload.nextAction
  const onSubmitAction = onSubmit.action
  const onSubmitArgs= onSubmit.payload || null

  yield put(onSubmitAction(onSubmitArgs))
}

export function* watchForFormSubmitted () {
  yield takeLatest(formSubmitted, validateFormAndSubmit)
}
