import React from 'react'
import PropTypes from 'prop-types';
import { every } from 'lodash'
import { pagesUrls } from "./navigationConstants"

export const Restricting = ({ Component, to , redirect = pagesUrls.home }) => {
    return class extends React.Component {

      static propTypes = {
        isLoggedIn: PropTypes.bool,
      }

      restrictAccess ()  {
        const unauthorised = !every(to, restriction => restriction(this.props))
        if (unauthorised) {
          this.props.redirectTo(redirect)
        }
      }

      componentDidMount () {
        this.restrictAccess()
      }

      componentDidUpdate () {
        this.restrictAccess()
      }

      render () {
        return <Component {...this.props} />
      }
    }

}

