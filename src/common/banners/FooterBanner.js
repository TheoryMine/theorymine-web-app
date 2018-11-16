import React, { PureComponent } from 'react'
import '../../index.scss'

import { local } from "../utils/localization"
import { Link } from "react-router-dom"
import { pagesUrls } from "../navigation/navigationConstants"

export default class FooterBanner extends PureComponent {
  render () {

    return (
      <div className='footer-banner m-3 p-2'>
        <div>
          <Link to={pagesUrls.termsAndConditions}>{local['footer_tc']}</Link> |
          <Link to={pagesUrls.privacyPolicy}>{local['footer_privacy']}</Link> |
          <Link to={pagesUrls.cancellations}>{local['footer_cancellations']}</Link>|
          <Link to={pagesUrls.faq}>{local.links_faq}</Link>
        </div>
        <p>
          Copyright 2011 TheoryMine Limited
        </p>
        <p>
          {local['footer_questions']}<a href="mailto:info@theorymine.co.uk"> info@theorymine.co.uk.</a>
        </p>

      </div>
    )
  }
}

