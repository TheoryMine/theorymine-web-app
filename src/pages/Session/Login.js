import React, { Component } from 'react';

import { local } from "../../common/utils/localization"
import { Link } from "react-router-dom"
import { pagesUrls } from "../../common/navigation/navigationConstants"
import LoginForm from "./LoginForm"

export default class Login extends Component {
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

