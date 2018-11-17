import { put, takeLatest, call, select } from 'redux-saga/effects'
import { api } from "../../common/requests/apiCalls"
import { getAuthToken } from "../Session/sessionSelectors"

import { getUserTheoremsFailed, getUserTheoremsRequested, getUserTheoremsSucceeded } from "./accountActions"

export function* getTheorems () {
  try {
    const auth_token = yield select(getAuthToken)
    const response = yield call(api.getOrders, { 'Authorization': 'Bearer ' + auth_token })
    if (response.ok) {
      yield put(getUserTheoremsSucceeded({ body: response.body }))
    } else {
      yield put(getUserTheoremsFailed({ notification: {message : 'Something went wrong fetching orders'} }))
    }

  }
  catch (error) {
    yield put(getUserTheoremsFailed({ notification: {message : 'Something went wrong fetching orders'} }))
  }
}

export function* watchForGetTheoremsRequested () {
  yield takeLatest(getUserTheoremsRequested, getTheorems)
}
