import React, { Component } from 'react';

import { local } from "../../common/utils/localization"
import { Link } from "react-router-dom"
import { pagesUrls } from "../../common/navigation/navigationConstants"
import LoginForm from "./LoginForm"
import Restricting from "../../common/navigation/RestrictingContainer"

let Login = class extends Component {
  render () {

    return (
      <div className='description-box'>
        <h2 className="mb-4 mt-4">
          <span className="section-heading-lower">{local[ 'login_title' ]}</span>
        </h2>
        <p className='tm-form-row m-4'>{local.login_noaccount}<Link to={pagesUrls.register}> {local.register}</Link>
        </p>
        <LoginForm/>
      </div>


    );
  }
}

const restrictions = [
  props => props.isNotLoggedIn
]

Login = Restricting({ to: restrictions, Component: Login })

export default Login