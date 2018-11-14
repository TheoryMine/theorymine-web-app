import React, { Component } from 'react';
import PropTypes from 'prop-types';

import numberButtonFull from "../../images/number_button_full.png"
import numberButtonEmpty from "../../images/number_button_empty.png"
import { Link } from "react-router-dom"

export default class Step extends Component {
  static propTypes = {
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    redirectTo: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props)
    this.state = { isHovered: false }
  }

  handleHover = () => {
    this.setState({ isHovered: true })
  }

  handleUnHover = () => {
    this.setState({ isHovered: false })
  }


  render () {

    const { number, name } = this.props
    const backgroundImage = this.state.isHovered ? numberButtonFull : numberButtonEmpty
    return (

      <div className="step pr-3 pl-3 pt-2 pb-2 m-3" onMouseEnter={this.handleHover}
           onMouseLeave={this.handleUnHover}>
        <Link to={this.props.redirectTo}>
        <span className="step-number"
              style={{ backgroundImage: "url(" + backgroundImage + ")" }}>{number}</span> {name}
        </Link>
      </div>

    );
  }
}

