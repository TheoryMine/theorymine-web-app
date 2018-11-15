import React, { Component } from 'react';

import { local } from "../../common/utils/localization"
import ValidatingInput from "../../common/forms/ValidatingInput"
import QuestionMark from "../Checkout/QuestionMark"
import { formFieldValidators } from "../../common/forms/formFieldValidators"
import { fieldNames, formsNames } from "../../common/forms/formsAndFieldsConstants"
import { Link } from "react-router-dom"
import { pagesUrls } from "../../common/navigation/navigationConstants"
import ValidatingForm from "../../common/forms/ValidatingFormContainer"
import { redirect } from "../../common/navigation/navigationActions"
import { registrationFailed, registrationRequested, registrationSucceeded } from "./sessionActions"
import { sessionValidators } from "./sessionValidators"

export default class Register extends Component {
  render () {

    const formId = formsNames.register

    return (
      <div className='description-box'>
        <ValidatingForm
          className='tm-form m-4'
          formId={formId}
          buttonText={local.register}
          onSubmitAction={{ action: registrationRequested, }}
          onSuccessAction={{ action: registrationSucceeded, }}
          onFailureAction={{ action: registrationFailed, }}>
          <h2 className="mb-4 mt-4">
            <span className="section-heading-lower">{local[ 'register_title' ]}</span>
          </h2>
          <div className='tm-form-row'>
            <label className='form-text' htmlFor={fieldNames.firstName}>{local.firstname}</label>
            <ValidatingInput
              formId={formId}
              id={fieldNames.firstName}
              validators={[ formFieldValidators.isNotEmpty ]}
              type='text'/>
          </div>
          <div className='tm-form-row'>
            <label className='form-text' htmlFor={fieldNames.lastName}>{local.lastname}</label>
            <ValidatingInput
              formId={formId}
              id={fieldNames.lastName}
              validators={[ formFieldValidators.isNotEmpty ]}
              type='text'/>
          </div>
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
              validators={[
                formFieldValidators.isNotEmpty,
                sessionValidators.passwordLongEnough,
                sessionValidators.passwordHasNumbers,
                sessionValidators.passwordHasLetters,
              ]}
              type='password'/>
          </div>
          <div className='tm-form-row'>
            <label className='form-text' htmlFor={fieldNames.password2}>{local.register_retype1}</label>
            <ValidatingInput
              formId={formId}
              id={fieldNames.password2}
              validators={[ formFieldValidators.isNotEmpty, sessionValidators.matchesOtherPassword ]}
              type='password'/>
          </div>
        </ValidatingForm>
      </div>


    );
  }
}

