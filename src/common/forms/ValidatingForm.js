import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ValidatingForm extends Component {
  static propsTypes = {
    formId: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    onSubmitAction: PropTypes.object.isRequired,
  }

  static defaultProps = {
    onSubmitAction: ({action: null})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit()
  }

  render () {

    const { formId, children, className = '', buttonClassName = 'submit-button', buttonText= 'Submit' } = this.props
    return (
      <form id={formId} onSubmit={this.handleSubmit} className={className}>
        {children}
        <button className={buttonClassName} type='submit'>{buttonText}</button>
      </form>


    );
  }
}

