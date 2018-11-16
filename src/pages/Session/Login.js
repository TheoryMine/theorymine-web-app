import React, { Component } from 'react';

import { local } from "../../common/utils/localization"
import ValidatingInput from "../../common/forms/ValidatingInput"
import { formFieldValidators } from "../../common/forms/formFieldValidators"
import { fieldNames, formsNames } from "../../common/forms/formsAndFieldsConstants"
import ValidatingForm from "../../common/forms/ValidatingFormContainer"
import { loginFailed, loginRequested, loginSucceeded, } from "./sessionActions"
import { Link } from "react-router-dom"
import { pagesUrls } from "../../common/navigation/navigationConstants"

export default class Login extends Component {
  render () {

    const formId = formsNames.login

    return (
      <div className='description-box'>
        <h2 className="mb-4 mt-4">
          <span className="section-heading-lower">{local[ 'login_title' ]}</span>
        </h2>
        <p className='tm-form-row m-4'>{local.login_noaccount}<Link to={pagesUrls.register}> {local.register}</Link>
        </p>
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
      </div>


    );
  }
}

