import { put, select, takeLatest, all } from 'redux-saga/effects'
import { formSubmitted, validateFieldValue } from "./formsActions"
import { getFormFieldsNames, getFormValidity } from "./formsSelectors"

export function* validateFormAndSubmit (action) {
  const onSubmit = action.payload.nextAction
  const formId = action.payload.formId
  const onSubmitAction = onSubmit.action
  const onSubmitArgs= onSubmit.payload || null

  const formFields = yield select(getFormFieldsNames(formId))
  yield all(formFields.map(field => put(validateFieldValue({formName: formId, fieldName: field}))));
  const isFormValid = yield select(getFormValidity(formId))
  if (isFormValid){
    yield put(onSubmitAction(onSubmitArgs))
  }
}

export function* watchForFormSubmitted () {
  yield takeLatest(formSubmitted, validateFormAndSubmit)
}
