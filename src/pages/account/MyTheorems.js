import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Restricting from "../../common/navigation/RestrictingContainer"
import { pagesUrls } from "../../common/navigation/navigationConstants"
import { local } from "../../common/utils/localization"

let MyTheorems = class extends Component {

  static propsTypes = {
    loaded: PropTypes.bool.isRequired,
    inProgressTheorems: PropTypes.object,
    processesTheorems: PropTypes.object
  }

  static defaultProps = {
    loaded: false,
  }

  componentDidMount () {
    if (this.props.loaded) {
      this.props.onLoadUserTheorems()
    }
  }

  componentDidUpdate(previousProps) {
    if (this.props.loaded !== previousProps.loaded) {
      this.props.onLoadUserTheorems()
    }
  }

  render () {

    const {processesTheorems, inProgressTheorems} = this.props

    const processTheoremsList= processesTheorems.map(th => {
      const certificateId = th.certificate_title
      const thm_image_loc=`https://www.theorymine.co.uk/certificates/${certificateId}/thm.jpg`
      const thy_image_loc=`https://www.theorymine.co.uk/certificates/${certificateId}/thy.jpg`
      const thm_cgi_image_loc = encodeURI(thm_image_loc)
      const thy_cgi_image_loc= encodeURI(thy_image_loc)
      const thm_cgi_name= encodeURI(th.title)
      const zazzleUrl = 'http://www.zazzle.co.uk/api/create/at-238416837775884316?rf=238416837775884316&ax=DesignBlast&cg=0&ed=true&continueUrl=http%3A%2F%2Fwww.theorymine.co.uk&rut=Go%20back%20to%20TheoryMine%20website&fwd=ProductPage&'+
        'thm='+ thm_cgi_image_loc + "&thmname=" + thm_cgi_name + "&thy=" + thy_cgi_image_loc
      return (
        <li className='listed-thm' key={th.id}>
          <span className='listed-thm-title'>{th.title}</span>
          <span className='listed-thm-links'>
          <a href={`https://www.theorymine.co.uk/certificates/${certificateId}/certificate.pdf`}>{local.dicoveredthm_viewcert}</a> |
          <a href={`https://www.theorymine.co.uk/certificates/${certificateId}/brouchure.pdf`}>{local.dicoveredthm_viewbro}</a> |
          <a href={zazzleUrl}>{local.dicoveredthm_shop}</a>
          </span>
        </li>
      )
    })

    const inProgressTheoremsList= inProgressTheorems.map(th => {
      var date = new Date(th.time_stamp);
      return (
        <li className='listed-thm' key={th.id}>
          <span className='listed-thm-title'>{th.title}</span>: {local['progress_placedon']}{date.toDateString()}
        </li>
      )
    })

    return (
      <div>
        <div className="description-box">
          <h2 className="mb-4 mt-4">
            <span className="section-heading-lower">{local[ 'my_theorems' ]}</span>
          </h2>

          <div className='border p-3'>
            <h2 className="mb-4 mt-4">
              <span className="section-heading-upper">{local[ 'thm_in_progress' ]}</span>
            </h2>
            <ul>
              {inProgressTheoremsList}
            </ul>

            <h2 className="mb-4 mt-4">
              <span className="section-heading-upper">{local[ 'thm_processed' ]}</span>
            </h2>
            <ul>
              {processTheoremsList}
            </ul>

          </div>

        </div>

      </div>
    );
  }
}

const restrictions = [
  props => props.isLoggedIn
]

MyTheorems = Restricting({ to: restrictions, Component: MyTheorems, redirect: pagesUrls.login })

export default MyTheorems