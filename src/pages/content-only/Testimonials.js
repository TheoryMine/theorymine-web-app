import React, { Component } from 'react';
import ContentPage from "./ContentPage"
import { local } from "../../common/utils/localization"
import anneGlover from '../../images/anne_glover_small.jpg';
import ned from '../../images/neds_theorem.jpg';

const Testimonials = () => {

  return (
    <ContentPage>
      <div className='testimonial'>
        <p>{local[ 'tes_p1' ]}</p>
        <p className='font-italic small'>&nbsp;  &nbsp;  Anne Glover, Chief Scientific Officer for Scotland ,
          Glover-George Theorem </p>
        <img className='content-only-image'  src={anneGlover}/>
      </div>

      <div className='testimonial'>
        <p>{local[ 'tes_p2' ]}</p>
        <p className='font-italic small'>&nbsp;  &nbsp;   Jacob Aron, Aron's Theorem, <a
          href="http://www.newscientist.com/article/dn19809-you-too-can-get-that-pythagoras-feeling"> The New
          Scientist </a>
        </p>
      </div>

      <div className='testimonial'>
        <p>{local[ 'tes_p3' ]}</p>
        <p className='font-italic small'>&nbsp;  &nbsp;  Fiona Godsman, Director of SIE</p>
      </div>

      <div className='testimonial'>
        <p>{local[ 'tes_p4' ]}</p>
        <p className='font-italic small'>&nbsp;  &nbsp;  Chris Watt, The Herald </p>
      </div>
      <div className='testimonial'>
        <p>{local[ 'tes_p5' ]}</p>
        <p className='font-italic small'>&nbsp;  &nbsp;  Kate Carter, Kim Lomax and Malgorzata Stankiewicz, <a
          href="http://www.guardian.co.uk/lifeandstyle/gallery/2010/nov/19/christmas-gifts-difficult-to-buy-for#/?picture=368824189&index=11">
          The Guardian </a>
        </p>
      </div>

      <div className='testimonial'>
        <p>{local[ 'tes_p6' ]}</p>
        <p className='font-italic small'>&nbsp;  &nbsp;   Nigel Brown, Ned's Theorem</p>
        <img className='content-only-image'  src={ned}/>
      </div>
      <p>
        <a href="http://www.bbc.co.uk/programmes/b00ryl03#synopsis"
           target="_blank">{local[ 'tes_p7' ]}</a>
      </p>
    </ContentPage>
  )
}

Testimonials.propTypes = {};

Testimonials.defaultProps = {}

export default Testimonials;




