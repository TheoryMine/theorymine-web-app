import { createSelector } from 'reselect'

export const getAccount = state => state.account
export const getInProgressTheorems =createSelector([ getAccount ],a=> a.in_progress || [])
export const getProcessedTheorems =createSelector([ getAccount ],a=> a.processed || [])

