import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutPayment from "./CheckoutPaymentContainer"

export default class Checkout extends Component {

  render () {

    return (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">

        <div>
          <div className="description-box">
            <h2 className="mb-4 mt-4">
              <span className="section-heading-lower">{this.props.theoremName}: £15</span>
            </h2>


            <Elements>
              <CheckoutPayment/>
            </Elements>

          </div>

        </div>
      </StripeProvider>


    );
  }
}
