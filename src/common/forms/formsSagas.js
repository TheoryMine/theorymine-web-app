import { put, select, takeLatest, all } from 'redux-saga/effects'
import { formSubmitted, validateFieldValue } from "./formsActions"
import { getFormFieldsNames, getFormValidity } from "./formsSelectors"

export function* validateFormAndSubmit (action) {
  const onSubmit = action.payload.nextAction
  const formid = action.payload.formid
  const onSubmitAction = onSubmit.action
  const onSubmitArgs= onSubmit.payload || null

  const formFields = yield select(getFormFieldsNames(formid))
  yield all(formFields.map(field => put(validateFieldValue({formName: formid, fieldName: field}))));
  const isFormValid = yield select(getFormValidity(formid))
  if (isFormValid){
    yield put(onSubmitAction(onSubmitArgs))
  }
}

export function* watchForFormSubmitted () {
  yield takeLatest(formSubmitted, validateFormAndSubmit)
}
