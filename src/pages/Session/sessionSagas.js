import { call, select, put, takeLatest } from 'redux-saga/effects'
import { registrationFailed, registrationRequested, registrationSucceeded } from "./sessionActions"
import { getRegistrationFormFields } from "./sessionSelectors"
import { api } from "../../common/requests/apiCalls"

export function* register() {
  const registrationFields= yield select(getRegistrationFormFields)

  const response = yield call(api.register,registrationFields)
  if (response.ok) {
    yield put(registrationSucceeded({body: response.body}))
  } else {
    yield put(registrationFailed({body: response.body}))
  }
}

export function* watchForSearchLocationRequested() {
  yield takeLatest(registrationRequested, register)
}
