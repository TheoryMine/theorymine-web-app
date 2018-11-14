import React, { Component } from 'react';
import { local } from "../../common/utils/localization"
import questionIcon from "../../images/question_icon.png"

export default class QuestionMark extends Component {

  render () {

    return (
      <p>{local[ 'overview_choose' ]}
        <span className='questionMark m-2'>
          <img src={questionIcon} alt="?" width="15" height="15"/>
          {local[ 'questionmark' ]}
        </span>
      </p>




    );
  }
}

