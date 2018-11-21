import React, { Component } from 'react';
import ContentPage from "./ContentPage"
import { local } from "../../common/utils/localization"

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




