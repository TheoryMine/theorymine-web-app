import { put, takeLatest, call, select } from 'redux-saga/effects'
import { api } from "../../common/requests/apiCalls"

import { getUserTheoremsFailed, getUserTheoremsRequested, getUserTheoremsSucceeded } from "./accountActions"
import { makeAuthorisedRequest } from "../../common/requests/requestsSagas"

export function* getTheorems () {
  try {
    const response = yield call(makeAuthorisedRequest, { apiCall: api.getOrders })
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
