import React, { Component } from 'react';

import { local } from "../../common/utils/localization"
import Restricting from "../../common/navigation/RestrictingContainer"
import { RegistrationForm } from "./RegistrationForm"

let Register = class extends Component {
  render () {

    return (
      <div className='description-box'>
        <h2 className="mb-4 mt-4">
          <span className="section-heading-lower">{local[ 'register_title' ]}</span>
        </h2>
        <RegistrationForm/>
      </div>


    );
  }
}

const restrictions = [
  props => props.isNotLoggedIn
]

Register = Restricting({ to: restrictions, Component: Register })

export default Register