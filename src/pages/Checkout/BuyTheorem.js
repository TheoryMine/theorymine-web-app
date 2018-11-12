import React, { Component } from 'react';
import { local } from "../../common/utils/localization"
import questionIcon from "../../images/question_icon.png"

export default class BuyTheorem extends Component {

  render () {

    return (
      <div>
        <div className="description-box">
          <h2 className="mb-4 mt-4">
            <span className="section-heading-lower">{local[ 'discover_title' ]}: £15</span>
          </h2>
          <div className='border p-3'>
            <form>
              <h2 className="section-heading-upper">{local[ 'overview_get_started' ]}</h2>
                <p>{local[ 'overview_choose' ]}
                  <a className='questionMark m-2'>
                    <img src={questionIcon} alt="?" width="15" height="15"/>
                    {local[ 'questionmark' ]}
                  </a>
                </p>


              <input
                className='m-4'
                id='theoremName'
                type='text'/>
              <p>{local[ 'overview_eg' ]}</p>
              <button className='intro-button' type='submit'>Next</button>
            </form>
          </div>

        </div>
        <div className="small description-box description-box-small mt-4">
          <p className="mb-0">{local[ 'discover_part1' ]}</p>
          <a href="/" className="mt-3"> See an example theorem certificate</a>

          <p className="mb-0">{local[ 'discover_part2' ]}</p>
        </div>

      </div>


    );
  }
}

