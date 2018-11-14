import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

export default class NavigationTab extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    goToNextPage: PropTypes.func.isRequired,
  }

  handleClick = () => {
    this.props.goToNextPage()
  }

  render () {

    return (
      <p className="nav-link text-uppercase text-expanded" onClick={this.handleClick}>{this.props.title}</p>
    )
  }
}

