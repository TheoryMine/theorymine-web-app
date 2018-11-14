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

    const { formId, children, buttonText= 'Submit' } = this.props
    return (
      <form id={formId} onSubmit={this.handleSubmit}>
        {children}
        <button className='intro-button' type='submit'>{buttonText}</button>
      </form>


    );
  }
}

