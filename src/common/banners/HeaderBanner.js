import React, { PureComponent } from 'react'
import logo from "../../images/logo.png"

import chinese_flag from "../../images/chinese_flag.gif"
import english_flag from "../../images/english_flag.gif"
import spanish_flag from "../../images/spanish_flag.gif"

import '../../index.scss'
import { pagesUrls } from "../navigation/navigationConstants"
import { local } from "../utils/localization"
import NavigationTab from "./NavigationTabContainer"

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
        <NavigationTab title={tab.title} redirectTo={tab.redirectTo}/>
      </li>
    ))

    return (
      <div>
        <h1 className="site-heading pr-5 pl-5 d-none d-lg-block">
          <span className="site-heading-lower">
            <a href="/">
                  <img className="logo" src={logo} width="320px" alt="TheoryMine"/>
                  <sup>TM</sup>
                </a>
          </span>
          <span className='site-heading-upper mb-3'>Personalized mathematical theorems</span>
        </h1>

        <div className="site-heading-upper text-right mr-2">
          <a href="?lang=en"><img className="m-1" height="20px" src={english_flag} alt="english"/></a>
          <a href="?lang=sp"><img className="m-1" height="20px" src={spanish_flag} alt="spanish"/></a>
          <a href="?lang=cn"><img className="m-1" height="20px" src={chinese_flag} alt="chinese"/></a>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark py-lg-3" id="mainNav">

          <div className="container">
            <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">TheoryMine</a>
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

