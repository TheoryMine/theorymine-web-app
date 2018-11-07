import React, { PureComponent } from 'react'
import '../../index.scss'

import { local } from "../utils/localization"

export default class FooterBanner extends PureComponent {
  render () {

    return (
      <div className='footer-banner m-3 p-2'>
        <div>
          <a href="/">{local['footer_tc']}</a> |
          <a href="/">{local['footer_privacy']}</a> |
          <a href="/cancellations">{local['footer_cancellations']}</a>
        </div>
        <p>
          Copyright 2011 TheoryMine Limited
        </p>
        <p>
          {local['footer_questions']}<a href="mailto:info@theorymine.co.uk">info@theorymine.co.uk.</a>
        </p>

      </div>
    )
  }
}

