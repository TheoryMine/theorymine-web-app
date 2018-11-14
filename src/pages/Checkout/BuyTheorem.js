import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { local } from "../../common/utils/localization"
import ValidatingInput from "../../common/forms/ValidatingInput"
import QuestionMark from "./QuestionMark"
import { formFieldValidators } from "../../common/forms/formFieldValidators"
import { fieldNames, formsNames } from "../../common/forms/formsAndFieldsConstants"
import { Link } from "react-router-dom"
import { pagesUrls } from "../../common/navigation/navigationConstants"

export default class BuyTheorem extends Component {
  static propsTypes = {
    goToCheckout: PropTypes.func,
  }

  static defaultProps = {
    goToCheckout: () => {},
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.goToCheckout()
  }

  render () {

    const formId = formsNames.discover

    return (
      <div>
        <div className="description-box">
          <h2 className="mb-4 mt-4">
            <span className="section-heading-lower">{local[ 'discover_title' ]}: £15</span>
          </h2>

          <div className='border p-3'>
            <form id={formId} onSubmit={this.handleSubmit}>
              <h2 className="section-heading-upper">{local[ 'overview_get_started' ]}</h2>
              <QuestionMark />
              <ValidatingInput
                id={fieldNames.theoremName}
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
          <Link to={pagesUrls.certificateExample} className="mt-3"> See an example theorem certificate</Link>
          <p className="mb-0">{local[ 'discover_part2' ]}</p>
        </div>

      </div>


    );
  }
}

