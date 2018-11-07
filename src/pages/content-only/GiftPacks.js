import React, { Component } from 'react';
import ContentPage from "./ContentPage"
import { local } from "../../common/utils/localization"
import theorymine_mousepad from '../../images/theorymine_mousepad.jpg';
import theorymine_mug from '../../images/theorymine_mug.jpg';
import theorymineTshirt2 from '../../images/theorymine_t_shirt2.jpg';
import theorymineTshirt1 from '../../images/theorymine_tshirt1.jpg';

const GiftPacks = () => {

  return (
    <ContentPage>
      <p>{local[ 'gift_p1' ]}</p>
      <p>{local[ 'gift_p2' ]}</p>
      <p>{local[ 'gift_p3' ]}</p>
      <h3 className="section-heading-upper">{local[ 'gift_h1' ]}</h3>
      <p>{local[ 'gift_h1_1' ]}</p>
      <ul>
        <li>{local[ 'gift_li1_1' ]}</li>
        <li>{local[ 'gift_li1_2' ]}</li>
        <li>{local[ 'gift_li1_3' ]}</li>
      </ul>
      <h3 className="section-heading-upper">{local[ 'gift_h2' ]}</h3>
      <ul>
        <li>{local[ 'gift_li2_1' ]}<br/>
          <img src={theorymineTshirt2}/>
          <img src={theorymineTshirt1}/>
        </li>
        <li>{local[ 'gift_li2_2' ]}<br/>
          <img src={theorymine_mug}/>
        </li>
        <li>{local[ 'gift_li2_3' ]}<br/>
          <img src={theorymine_mousepad}/>
      </li>
    </ul>
      <p>{local['gift_end']}</p>
      <p>{local['gift_provider']}</p>
</ContentPage>
)
}

GiftPacks.propTypes = {};

GiftPacks.defaultProps = {}

export default GiftPacks;




