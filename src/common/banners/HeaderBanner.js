import React, { PureComponent } from 'react'
import favicon from "../../images/favicon.ico"

import PropTypes from 'prop-types'

export default class HeaderBannerComponent extends PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    onSignOut: PropTypes.func,
  }

  render () {

    return (
      <div>
        <table style="margin-left: 48px">
          <tr>
            <td>
              <div class="logo-header">
                <a href="?go=overview">
                  <img class="logo" src="images/logo.png" width="320px" alt="TheoryMine"/>
                  <sup>TM</sup>
                </a>
                <p>Personalized mathematical theorems></p>
              </div>
            </td>
            <td>
              <div class="mascots">
                <img src="images/mathematicians_Christmas.png" align="middle" style="width:39%;"> ... you could be
                  next! </img>
              </div>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
