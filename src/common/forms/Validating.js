import React, { PureComponent, Fragment } from 'react'
import { has, isNil } from 'lodash'
import ValidatingContainer from "./ValidatingContainer"

export const Validating = Component => {
  const ValidatingComponent = class extends React.Component {

    constructor (props) {
      super(props)
      props.onInitialization()
    }

    onChange = event => {
      this.props.recordValue(event.target.value)
    }

    onBlur = () => {
      this.props.validateValue()
    }

    render () {
      const {
        id,
        className,
        isValid,
        notification,
        label,
      } = this.props

      const message = !isNil(notification) && (
        <p className={'field-notification ' + 'field-notification-' + notification.level}>
          {notification.message}
        </p>
      )

      const isValidClassName = isValid ?  "" : 'field-' + notification.level
      const componentClassName = className ?  className + " " +  isValidClassName : isValidClassName

      return (
        <Fragment>
          {label && (
            <label htmlFor={id}>
              {label}
            </label>
          )}
          <Component id={id}
                     onChange={this.onChange}
                     className={componentClassName}
                     onBlur={this.onBlur}{...this.props} />
          <div>{message}</div>
        </Fragment>
      )

    }
  }
  return ValidatingComponent

}
