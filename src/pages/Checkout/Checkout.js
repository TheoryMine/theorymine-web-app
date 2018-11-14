import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutPayment from "./CheckoutPayment"

export default class Checkout extends Component {

  handleSubmit = event => {
    event.preventDefault()
  }

  render () {

    const formId = 'payTheorem'
    // Create a Stripe client.

    return (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">

        <div>
          <div className="description-box">
            <h2 className="mb-4 mt-4">
              <span className="section-heading-lower">{this.props.theoremName}: £15</span>
            </h2>


            <form id={formId} className='tm-form' onSubmit={this.handleSubmit}>
              <Elements>
                <CheckoutPayment />
              </Elements>

              <button type='submit'>Submit Payment</button>
            </form>
          </div>

        </div>
      </StripeProvider>


    );
  }
}
