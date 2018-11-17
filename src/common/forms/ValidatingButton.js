import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formStatuses } from "./formsAndFieldsConstants"

export default class ValidatingButton extends Component {
  static propsTypes = {
    formId: PropTypes.string.isRequired,
    formStatus: PropTypes.string
  }

  static defaultProps = {
    formStatus: formStatuses.initialised
  }


  render () {

    const {formStatus, formId, text, dispatch, ...button_props} = this.props
    const disabled = formStatus === formStatuses.inProgress ? true : this.props.disabled
    const givenClass = this.props.className || ""
    const className = givenClass + 'validating button validating-button-'+this.props.formStatus
    return ( <button {...button_props} className={className } disabled={disabled}>{this.props.text}</button>)

  }

  a
}

