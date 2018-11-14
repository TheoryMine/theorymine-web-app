import React, { Component } from 'react';
import homeBackground from "../../images/homebackground.png"
import Step from "./Step"
import { pagesUrls } from "../../common/navigation/navigationConstants"
import { Link } from "react-router-dom"

export default class Home extends Component {

  render () {

    const steps = [
      { number: "1", name: 'YOU choose a name', redirectTo: pagesUrls.discover },
      { number: "2", name: 'WE discover a theorem', redirectTo: pagesUrls.faq },
      { number: "3", name: 'THEY get a great gift', redirectTo: pagesUrls.gifts }
    ]

    const stepBoxes = steps.map(step => <Step {...step} key={step.number}/>)

    return (

      <div className="home-page" style={{ backgroundImage: "url(" + homeBackground + ")" }}>
        <div className="description-box">
          <h2 className="mb-4 mt-4">
            <span className="section-heading-upper">TheoryMine lets you name a personalised, newly discovered, mathematical theorems as a novelty gift.</span>
          </h2>
          <p className="mb-0">Name your very own mathematical theorem, newly discovered by one of the world's most
            advanced computerised
            theorem provers (a kind of robot mathematician), and you can immortalise your loved ones, teachers, friends
            and even yourself and your favourite pets.
          </p>
          <Link to={pagesUrls.certificateExample} className="mt-3"> See an example theorem certificate</Link>
        </div>

        <div className="steps">
          {stepBoxes}
        </div>
        <div className='description-box mt-5 mb-5'>
          <Link to={pagesUrls.discover}>
            <button className='intro-button pl-5 pr-5 large' type='submit'>Get Started</button>
          </Link>
        </div>

      </div>

    );
  }
}

