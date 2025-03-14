import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';

export default class ValidatingForm extends Component {
  static propsTypes = {
    formId: PropTypes.string.isRequired,
    isFormValid: PropTypes.bool.isRequired,
    notification: PropTypes.object,
    onSubmitAction: PropTypes.object.isRequired,
    onSuccessAction: PropTypes.object,
    onFailureAction: PropTypes.object,
  }

  static defaultProps = {
    notification: null,
    onSubmitAction: ({ action: null }),
    onSuccessAction: ({ action: null }),
    onFailureAction: ({ action: null }),
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit()
  }

  render () {
    const {
      formId,
      children,
      isFormValid,
      notification,
      className = '',
      notificationClassName = '',
    } = this.props
    const validityClassName = isFormValid ? 'validating-form-valid' : 'validating-form-invalid'
    const notificationClassNames = !isNil(notification)
      ? notificationClassName + ' validating-notification validating-notification-' + notification.level
      : notificationClassName + ' validating-notification'

    const notificationBanner = !isNil(notification) && (<div className={notificationClassNames}>
      {notification.message}
    </div>)
    return (
      <form id={formId} onSubmit={this.handleSubmit} className={className + ' ' + validityClassName}>
        {notificationBanner}
        {children}
      </form>


    );
  }
}

