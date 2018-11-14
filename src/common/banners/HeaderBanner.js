import React, { PureComponent } from 'react'
import logo from "../../images/logo.png"

import chinese_flag from "../../images/chinese_flag.gif"
import english_flag from "../../images/english_flag.gif"
import spanish_flag from "../../images/spanish_flag.gif"

import '../../index.scss'
import { pagesUrls } from "../navigation/navigationConstants"
import { local } from "../utils/localization"
import { Link } from "react-router-dom"

export default class HeaderBanner extends PureComponent {

  render () {

    const navigationTabs = [
      { title: local.links_home, redirectTo: pagesUrls.home },
      { title: local.links_faq, redirectTo: pagesUrls.faq },
      { title: local.links_about, redirectTo: pagesUrls.aboutUs },
      { title: local.links_gift, redirectTo: pagesUrls.gifts },
      { title: local.links_test, redirectTo: pagesUrls.testimonials },
    ]

    const clickableNavigationTabs = navigationTabs.map(tab => (
      <li className='nav-item px-lg-4' key={tab.title}>
        <Link className="nav-link text-uppercase text-expanded" to={tab.redirectTo}>{tab.title}</Link>
      </li>
    ))

    return (
      <div>
        <h1 className="site-heading pr-5 pl-5 d-none d-lg-block">
          <span className="site-heading-lower">
            <Link to={pagesUrls.home}>
              <img className="logo" src={logo} width="320px" alt="TheoryMine"/>
              <sup>TM</sup>
            </Link>
          </span>
          <span className='site-heading-upper mb-3'>Personalized mathematical theorems</span>
        </h1>

        <div className="site-heading-upper text-right mr-2">
          <Link to="?lang=en"><img className="m-1" height="20px" src={english_flag} alt="english"/></Link>
          <Link to="?lang=sp"><img className="m-1" height="20px" src={spanish_flag} alt="spanish"/></Link>
          <Link to="?lang=cn"><img className="m-1" height="20px" src={chinese_flag} alt="chinese"/></Link>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-3" id="mainNav">

          <div className="container">
            <Link to={pagesUrls.home} className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none">
              TheoryMine
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mx-auto">
                {clickableNavigationTabs}
              </ul>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

