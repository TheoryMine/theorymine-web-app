import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ValidatingContainer from "./ValidatingContainer"

export class Input extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    formid: PropTypes.string.isRequired,
    validators: PropTypes.array
  }
  render() {
    const { formid, validators, isValid, onInitialization, recordValue, validateValue, ...inputProps } = this.props;
    return (
        <input
          {...inputProps}
        />
    )
  }
}

const ValidatingInput = ValidatingContainer(Input)
export default ValidatingInput

