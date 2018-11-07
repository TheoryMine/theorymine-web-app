import React, { Component } from 'react';
import infoPageBackground from "../../images/info-page-background.gif"

const ContentPage = ({children}) => {

  return (
    <div className="content-only-page" style={{ backgroundImage: "url(" + infoPageBackground + ")" }}>

      <div className='content-box mt-5'>
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  )
}

ContentPage.propTypes = {};

ContentPage.defaultProps = {}

export default ContentPage;




