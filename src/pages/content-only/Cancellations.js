import React, { Component } from 'react';
import ContentPage from "./ContentPage"
import { local } from "../../common/utils/localization"
import theorymine_mousepad from '../../images/theorymine_mousepad.jpg';
import theorymine_mug from '../../images/theorymine_mug.jpg';
import theorymineTshirt2 from '../../images/theorymine_t_shirt2.jpg';
import theorymineTshirt1 from '../../images/theorymine_tshirt1.jpg';

const Cancellations = () => {

  return (
    <ContentPage>
      <h2 className="section-heading-lower m-4">{local['canc_title']}</h2>
      <p>{local['canc_p']}</p>
    </ContentPage>
  )
}

Cancellations.propTypes = {};

Cancellations.defaultProps = {}

export default Cancellations;




