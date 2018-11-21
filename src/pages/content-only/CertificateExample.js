import React, { Component } from 'react';
import { local } from "../../common/utils/localization"

import quentins_theorem from '../../images/Quentins_Theorem.jpg'
import ContentPage from "./ContentPage"

const CertificateExample = () => {

  return (
    <ContentPage>
      <h2 className="section-heading-lower mt-4">{local.certex_title}</h2>

      <img className='quentin-theorem' src={quentins_theorem} alt="An Example Certificate"/>

      <map name="imagemap">
        <area coords="100,250,400,300" href="#data-type"/>
        <area coords="100,320,400,420" href="#functions"/>
        <area coords="100,460,500,600" href="#theorem"/>
      </map>

      <h2 id="overview">{local.certex_q1}</h2>


    </ContentPage>
  )
}

export default CertificateExample;




