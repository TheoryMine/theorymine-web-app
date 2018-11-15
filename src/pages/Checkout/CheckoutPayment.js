import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { local } from "../../common/utils/localization"
import { CardElement, injectStripe } from 'react-stripe-elements'
import ValidatingForm from "../../common/forms/ValidatingFormContainer"
import { checkoutRequested } from "./checkoutActions"

class CheckoutPayment extends Component {

  static propsTypes = {
    theoremName: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props)
    this.state = { stripeErrors: "" }
  }

  handleChange = event => {
    if (event.error) {
      const errorMessage = event.error.message
      this.setState({ stripeErrors: errorMessage })
    } else {
      this.setState({ stripeErrors: '' })
    }
  }

  render () {
    const formId = 'payTheorem'

    return (
      <ValidatingForm
        className='tm-form m-4'
        formId={formId}
        buttonText={local.submit_payment}
        onSubmitAction={{ action: checkoutRequested, payload: { stripeClient: this.props.stripe  }}}>

        <div className="tm-form-row m-3">

          <label htmlFor="card-element">
            Credit or debit card
          </label>
          <CardElement onChange={this.handleChange}/>
          <div id="card-errors" className='field-notification field-notification-error'
               role="alert">{this.state.stripeErrors}</div>
        </div>
      </ValidatingForm>


    );
  }
}

export default injectStripe(CheckoutPayment);