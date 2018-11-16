import React, { Component } from 'react';

import { local } from "../../common/utils/localization"
import ValidatingInput from "../../common/forms/ValidatingInput"
import { formFieldValidators } from "../../common/forms/formFieldValidators"
import { fieldNames, formsNames } from "../../common/forms/formsAndFieldsConstants"
import ValidatingForm from "../../common/forms/ValidatingFormContainer"
import { loginFailed, loginRequested, loginSucceeded, } from "./sessionActions"

export default class LoginForm extends Component {
  render () {

    const formId = formsNames.login

    return (
      <ValidatingForm
        className='tm-form m-4'
        formId={formId}
        buttonText={local.links_login}
        onSubmitAction={{ action: loginRequested, }}
        onSuccessAction={{ action: loginSucceeded, }}
        onFailureAction={{ action: loginFailed, }}>
        <div className='tm-form-row'>
          <label className='form-text' htmlFor={fieldNames.email}>{local.email}</label>
          <ValidatingInput
            formId={formId}
            id={fieldNames.email}
            validators={[ formFieldValidators.isNotEmpty ]}
            type='text'/>
        </div>
        <div className='tm-form-row'>
          <label className='form-text' htmlFor={fieldNames.password}>{local.password}</label>
          <ValidatingInput
            formId={formId}
            id={fieldNames.password}
            validators={[ formFieldValidators.isNotEmpty ]}
            type='password'/>
        </div>
      </ValidatingForm>
    );
  }
}

