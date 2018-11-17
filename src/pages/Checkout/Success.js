import React, { Component } from 'react';

import { local } from "../../common/utils/localization"

export default class Success extends Component {
  render () {


    return (
      <div>
        <div className="description-box">
          <h2 className="mb-4 mt-4">
            <span className="section-heading-lower m-2">{local[ 'order_successful' ]}</span>
            <span className="section-heading-upper m-4">{local[ 'order_successful_2' ]}</span>
          </h2>
        </div>

      </div>


    );
  }
}

