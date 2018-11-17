import React, { Component } from 'react';
import { local } from "../../common/utils/localization"
import { CardElement, injectStripe } from 'react-stripe-elements'
import ValidatingForm from "../../common/forms/ValidatingFormContainer"
import { checkoutFailed, checkoutRequested, checkoutSucceeded } from "./checkoutActions"
import ValidatingButton from "../../common/forms/ValidatingButtonContainer"

class CheckoutPayment extends Component {

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
        onSubmitAction={{ action: checkoutRequested, payload: { stripeClient: this.props.stripe  }}}
        onSuccessAction={{ action: checkoutSucceeded, }}
        onFailureAction={{ action: checkoutFailed, }}>

        <div className="tm-form-row m-3">

          <label htmlFor="card-element">
            Credit or debit card
          </label>
          <CardElement onChange={this.handleChange}/>
          <div id="card-errors" className='field-notification field-notification-error'
               role="alert">{this.state.stripeErrors}</div>
        </div>

        <ValidatingButton formId={formId} disabled={this.props.isDisabled} type='submit' text={local.submit_payment}/>
      </ValidatingForm>


    );
  }
}

export default injectStripe(CheckoutPayment);