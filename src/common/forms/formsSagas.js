import { put, select, takeLatest, all, race, take } from 'redux-saga/effects'
import { isNil } from 'lodash'
import { formFailed, formSubmitted, formSucceeded, validateFieldValue } from "./formsActions"
import { getFormFieldsNames, getFormValidity } from "./formsSelectors"

export function* validateFormAndSubmit (action) {
  const onSubmit = action.payload.nextAction
  const formId = action.payload.formId
  const onSubmitAction = onSubmit.action
  const onSubmitArgs= onSubmit.payload || null

  const formFields = yield select(getFormFieldsNames(formId))
  yield all(formFields.map(field => put(validateFieldValue({formName: formId, fieldName: field}))));
  const areFieldsValid = yield select(getFormValidity(formId))
  if (areFieldsValid!= false){
    yield put(onSubmitAction(onSubmitArgs))
    if (action.payload.onSuccessAction && action.payload.onFailureAction){
      const submitExit = yield race({
        success: take(action.payload.onSuccessAction.action.toString()),
        failure: take(action.payload.onFailureAction.action.toString())
      })

      if (!isNil(submitExit.success)){
        yield put(formSucceeded({formId}))
      }

      else if (!isNil(submitExit.failure)){
        const formNotification = submitExit.failure.payload.notification || null
        yield put(formFailed({formId, notification: formNotification}))
      }

    }
  }
}

export function* watchForFormSubmitted () {
  yield takeLatest(formSubmitted, validateFormAndSubmit)
}
