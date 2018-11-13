import React, { Component } from 'react';
import { local } from "../../common/utils/localization"
import questionIcon from "../../images/question_icon.png"
import ValidatingInput from "../../common/forms/ValidatingInput"
import QuestionMark from "./QuestionMark"
import { formFieldValidators } from "../../common/forms/formFieldValidators"

export default class BuyTheorem extends Component {

  render () {

    const formId = 'discoverTheorem'

    return (
      <div>
        <div className="description-box">
          <h2 className="mb-4 mt-4">
            <span className="section-heading-lower">{local[ 'discover_title' ]}: £15</span>
          </h2>

          <div className='border p-3'>
            <form id={formId}>
              <h2 className="section-heading-upper">{local[ 'overview_get_started' ]}</h2>
              <QuestionMark />
              <ValidatingInput
                id='theoremName'
                formId={formId}
                validators={[formFieldValidators.isNotEmpty]}
                type='text'/>
              <p>{local[ 'overview_eg' ]}</p>
              <button className='intro-button' type='submit'>Next</button>
            </form>
          </div>

        </div>
        <div className="small description-box description-box-small mt-4">
          <p className="mb-0">{local[ 'discover_part1' ]}</p>
          <a href="/" className="mt-3"> See an example theorem certificate</a>

          <p className="mb-0">{local[ 'discover_part2' ]}</p>
        </div>

      </div>


    );
  }
}

