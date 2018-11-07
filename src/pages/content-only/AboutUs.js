import React, { Component } from 'react';
import ContentPage from "./ContentPage"
import { local } from "../../common/utils/localization"
import lucasDixon from "../../images/lucas_dixon.jpg"
import alanBundy from "../../images/alan_bundy.jpg"
import flaminiaCavallo from "../../images/flaminia_cavallo4.jpg"
import moaJohannson from "../../images/moa_johannson.jpg"


const About = () => {

  return (
    <ContentPage>
      <p>
        Hello!
        {local['about_p1']}
      </p><p>

      {local['about_p2']}
    </p><p>

      {local['about_p3']}
    </p>


      <div className='about-persona'>
        <p><b>Alan Bundy</b></p>
        <a href="http://homepages.inf.ed.ac.uk/bundy/"> <img src={alanBundy}/></a>

        <p>{local[ 'about_alan' ]}</p>
      </div>

      <div className='about-persona'>
        <p><b>Flaminia Cavallo</b></p>
        <img src={flaminiaCavallo}/>

        <p>{local[ 'about_fla' ]}</p>
      </div>


      <div className='about-persona'>
        <p><b>Lucas Dixon</b></p>
        <a href="http://homepages.inf.ed.ac.uk/ldixon/"><img src={lucasDixon}/></a>


        <p>{local[ 'about_lucas' ]}</p>
      </div>


      <div className='about-persona'>
        <p><b>Moa Johansson</b></p>
        <a href="http://homepages.inf.ed.ac.uk/v1mjoha1/"> <img src={moaJohannson}/></a>

        <p>{local[ 'about_moa' ]}</p>
      </div>


    </ContentPage>
  )
}

About.propTypes = {};

About.defaultProps = {}

export default About;




