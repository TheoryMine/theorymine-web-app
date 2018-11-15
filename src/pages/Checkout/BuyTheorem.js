import React, { Component } from 'react';

import { local } from "../../common/utils/localization"
import ValidatingInput from "../../common/forms/ValidatingInput"
import QuestionMark from "./QuestionMark"
import { formFieldValidators } from "../../common/forms/formFieldValidators"
import { fieldNames, formsNames } from "../../common/forms/formsAndFieldsConstants"
import { Link } from "react-router-dom"
import { pagesUrls } from "../../common/navigation/navigationConstants"
import ValidatingForm from "../../common/forms/ValidatingFormContainer"
import { redirect } from "../../common/navigation/navigationActions"

export default class BuyTheorem extends Component {
  render () {

    const formId = formsNames.discover

    return (
      <div>
        <div className="description-box">
          <h2 className="mb-4 mt-4">
            <span className="section-heading-lower">{local[ 'discover_title' ]}: £15</span>
          </h2>

          <div className='border p-3'>
            <ValidatingForm
              formId={formId}
              buttonText={local.next}
              onSubmitAction={{ action: redirect, payload: { to: pagesUrls.checkout } }}>
              <h2 className="section-heading-upper">{local[ 'overview_get_started' ]}</h2>
              <QuestionMark/>
              <ValidatingInput
                formId={formId}
                id={fieldNames.theoremName}
                validators={[ formFieldValidators.isNotEmpty ]}
                type='text'/>
              <p>{local[ 'overview_eg' ]}</p>
            </ValidatingForm>
          </div>

        </div>
        <div className="small description-box description-box-small mt-4">
          <p className="mb-0">{local[ 'discover_part1' ]}</p>
          <Link to={pagesUrls.certificateExample} className="mt-3"> See an example theorem certificate</Link>
          <p className="mb-0">{local[ 'discover_part2' ]}</p>
        </div>

      </div>


    );
  }
}

