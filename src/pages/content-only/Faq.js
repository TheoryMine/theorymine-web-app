import React, { Component } from 'react';
import { local } from "../../common/utils/localization"
import infoPageBackground from "../../images/info-page-background.gif"
import ContentPage from "./ContentPage"
import { Link } from "react-router-dom"
import { pagesUrls } from "../../common/navigation/navigationConstants"

const Faq = () => {

  return (
    <ContentPage>

          <h2 className='section-heading-lower'>{local[ 'faq_sec1' ]}</h2>
          <ol className="faq_ol">
            <li><a href="#what_buy">{local[ 'faq_q1' ]}</a></li>
            <li><a href="#process">{local[ 'faq_q2' ]}</a></li>
            <li><a href="#extras">{local[ 'faq_q3' ]}</a></li>
            <li><a href="#choose">{local[ 'faq_q4' ]}</a></li>
            <li><a href="#names_rep">{local[ 'faq_q5' ]}</a></li>
            <li><a href="#names_id">{local[ 'faq_q6' ]}</a></li>
            <li><a href="#payments">{local[ 'faq_q7' ]}</a></li>
            <li><a href="#delivery">{local[ 'faq_q8' ]}</a></li>
            <li><a href="#certificate">{local[ 'faq_q9' ]}</a></li>
          </ol>


          <h2 className='section-heading-lower'>{local[ 'faq_sec2' ]}</h2>
          <ol className="faq_ol">
            <li><a href="#what_theory">{local[ 'faq_q10' ]}</a></li>
            <li><a href="#what_theorem">{local[ 'faq_q11' ]}</a></li>
            <li><a href="#what_rec">{local[ 'faq_q12' ]}</a></li>
            <li><a href="#which_theorems">{local[ 'faq_q13' ]}</a></li>
            <li><a href="#proof_fine">{local[ 'faq_q14' ]}</a></li>
            <li><a href="#how_possible">{local[ 'faq_q15' ]}</a></li>
            <li><a href="#original">{local[ 'faq_q16' ]}</a></li>
            <li><a href="#trivial">{local[ 'faq_q17' ]}</a></li>
            <li><a href="#interesting">{local[ 'faq_q18' ]}</a></li>
            <li><a href="#authority">{local[ 'faq_q19' ]}</a></li>
            <li><a href="#forever">{local[ 'faq_q20' ]}</a></li>


          </ol>

          <h2 className='section-heading-lower'>{local[ 'faq_sec1' ]}</h2>
          <h3 className="section-heading-upper" id="what_buy">{local[ 'faq_q1' ]}</h3>

          <p>{local[ 'faq_a1' ]}</p>

          <h3 className="section-heading-upper" id="process">{local[ 'faq_q2' ]}</h3>

          <p>{local[ 'faq_a2' ]}</p>

          <h3 className="section-heading-upper" id="extras">{local[ 'faq_q3' ]}</h3>

          <p>{local[ 'faq_a3' ]}</p>

          <h3 className="section-heading-upper" id="choose">{local[ 'faq_q4' ]}</h3>

          <p>{local[ 'faq_a4' ]}</p>

          <h3 className="section-heading-upper" id="names_rep">{local[ 'faq_q5' ]}</h3>

          <p>{local[ 'faq_a5' ]}</p>

          <h3 className="section-heading-upper" id="names_id">{local[ 'faq_q6' ]}</h3>

          <p>{local[ 'faq_a6' ]}</p>

          <h3 className="section-heading-upper" id="payments">{local[ 'faq_q7' ]}</h3>
          <p>{local[ 'faq_a7' ]}</p>


          <h3 className="section-heading-upper" id="delivery">{local[ 'faq_q8' ]}</h3>

          <p>{local[ 'faq_a8' ]}</p>

          <h3 className="section-heading-upper" id="certificate">{local[ 'faq_q9' ]}</h3>

          <p>
            {local[ 'faq_a9' ]}</p>


          <h2 className='section-heading-lower'>{local[ 'faq_sec2' ]}</h2>


          <h3 className="section-heading-upper" id="what_theory">{local[ 'faq_q10' ]}</h3>


          <p>{local[ 'faq_a10' ]}</p>

          <h3 className="section-heading-upper" id="what_theorem">{local[ 'faq_q11' ]}</h3>

          <p>{local[ 'faq_a11' ]}</p>

          <h3 className="section-heading-upper" id="what_rec">{local[ 'faq_q12' ]}</h3>
          <p>{local[ 'faq_a12' ]}</p>
          <h3 className="section-heading-upper" id="which_theorems">{local[ 'faq_q13' ]}</h3>
          <p>{local[ 'faq_a13' ]}</p>
          <p>
            <Link to={pagesUrls.certificateExample}>Click here</Link> to view an example of a theorem and a detailed
            explanation.
          </p>
          <h3 className="section-heading-upper" id="proof_fine">{local[ 'faq_q14' ]}</h3>

          <p>{local[ 'faq_a14' ]}</p>

          <h3 className="section-heading-upper" id="how_possible">{local[ 'faq_q15' ]}</h3>

          <p>{local[ 'faq_a15' ]}</p>

          <h3 className="section-heading-upper" id="original">{local[ 'faq_q16' ]}</h3>

          <p>{local[ 'faq_a16' ]}</p>


          <h3 className="section-heading-upper" id="trivial">{local[ 'faq_q17' ]}</h3>

          <p>{local[ 'faq_a17' ]}</p>


          <h3 className="section-heading-upper" id="interesting">{local[ 'faq_q18' ]}</h3>

          <p>{local[ 'faq_a18' ]}</p>

          <h3 className="section-heading-upper" id="authority">{local[ 'faq_q19' ]}</h3>

          <p>{local[ 'faq_a19' ]}</p>

          <h3 className="section-heading-upper" id="forever">{local[ 'faq_q20' ]}</h3>

          <p>{local[ 'faq_a20' ]}</p>
    </ContentPage>
  )
}

Faq.propTypes = {};

Faq.defaultProps = {}

export default Faq;




