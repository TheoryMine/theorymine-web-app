import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardElement, injectStripe } from 'react-stripe-elements'

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


    return (

      <div className="tm-form-row">

        <label htmlFor="card-element">
          Credit or debit card
        </label>
        <CardElement onChange={this.handleChange}/>
        <div id="card-errors" className='field-notification field-notification-ERROR' role="alert">{this.state.stripeErrors}</div>
      </div>


    );
  }
}

export default injectStripe(CheckoutPayment);