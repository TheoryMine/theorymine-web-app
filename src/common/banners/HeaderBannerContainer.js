import { connect } from 'react-redux'

import { isLoggedIn } from "../../pages/Session/sessionSelectors"
import HeaderBanner from "./HeaderBanner"
import { logoutSucceeded } from "../../pages/Session/sessionActions"

export const mapStateToProps = state => {
  return {
    isLoggedIn: isLoggedIn(state),
  }
}


export const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutSucceeded())
  }
}

const HeaderBannerContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderBanner)
export default HeaderBannerContainer

