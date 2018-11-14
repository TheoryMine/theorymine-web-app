import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ValidatingForm extends Component {
  static propsTypes = {
    formid: PropTypes.string.isRequired,
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

    const { formid, children, buttonText= 'Submit' } = this.props
    const childrenWithFormId = React.Children.map(children, child =>
      React.cloneElement(child, { formid })
    );
    return (
      <form id={formid} onSubmit={this.handleSubmit}>
        {childrenWithFormId}
        <button className='intro-button' type='submit'>{buttonText}</button>
      </form>


    );
  }
}

