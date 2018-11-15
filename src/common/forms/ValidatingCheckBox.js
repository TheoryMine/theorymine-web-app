import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import ValidatingContainer from "./ValidatingContainer"

export class CheckBox extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    formId: PropTypes.string.isRequired,
    validators: PropTypes.array
  }

  onChange = event => {
    this.props.recordValue(event.target.checked)
  }

  render () {
    console.log('HERE',);
    const { formId, validators, isValid, onInitialization, recordValue, validateValue, text, ...inputProps } = this.props;
    return (
      <Fragment>
        <input
          {...inputProps}
          type="checkbox"
          onChange={this.onChange}
        />
        {this.props.text}
      </Fragment>
    )
  }
}

const ValidatingCheckBox = ValidatingContainer(CheckBox)
export default ValidatingCheckBox

