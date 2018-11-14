import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { redirect } from "./navigationActions"

export function* redirectTo (action) {
  const pageUrl = action.payload.to
  yield put(push(pageUrl))
}

export function* watchForRedirect () {
  yield takeLatest(redirect, redirectTo)
}
