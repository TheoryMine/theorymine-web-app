import { put, select, call } from 'redux-saga/effects'
import { getAuthToken } from "../../pages/Session/sessionSelectors"
import { logoutSucceeded } from "../../pages/Session/sessionActions"

export function* makeAuthorisedRequest (param) {
    const auth_token = yield select(getAuthToken)
    const apiCall = param.apiCall
    const body = param.body || null
    const response = yield call(apiCall, { 'Authorization': 'Bearer ' + auth_token }, body)

    if (response.status === 401) {
        yield put(logoutSucceeded())
      }
      return response
}