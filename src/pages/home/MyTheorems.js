import React, { Component } from 'react';
import Restricting from "../../common/navigation/RestrictingContainer"
import { pagesUrls } from "../../common/navigation/navigationConstants"
import { local } from "../../common/utils/localization"

let MyTheorems = class extends Component {

  render () {

    return (
      <div>HELLO</div>
    );
  }
}

const restrictions = [
  props => props.isLoggedIn
]

MyTheorems = Restricting({ to: restrictions, Component: MyTheorems, redirect: pagesUrls.login })

export default MyTheorems