import { call, select, put, takeLatest } from 'redux-saga/effects'
import { registrationFailed, registrationRequested, registrationSucceeded } from "./sessionActions"
import { getRegistrationFormFields } from "./sessionSelectors"
import { api } from "../../common/requests/apiCalls"
import { notificationLevels } from "../../common/forms/formFieldValidators"

export function* register() {
  const registrationFields= yield select(getRegistrationFormFields)

  const response = yield call(api.register,registrationFields)
  if (response.ok) {
    yield put(registrationSucceeded({body: response.body}))
  } else {
    const notificationMessage = response && response.body ? response.body.message || 'Unknown Error' : 'Unknown Error'
    const formNotification = {message: notificationMessage, level: notificationLevels.error}
    yield put(registrationFailed({notification: formNotification}))
  }
}

export function* watchForSearchLocationRequested() {
  yield takeLatest(registrationRequested, register)
}
