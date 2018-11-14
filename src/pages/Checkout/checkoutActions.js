import { createAction } from 'redux-actions'

export const checkoutRequested = createAction('CHECKOUT_REQUESTED')
export const checkoutSucceeded = createAction('CHECKOUT_SUCCEEDED')
export const checkoutFailed = createAction('CHECKOUT_FAILED')
