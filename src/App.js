import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from "./common/history"
import Home from "./pages/home/Home"
import HeaderBanner from "./common/banners/HeaderBanner"
import Faq from "./pages/content-only/Faq"
import About from "./pages/content-only/AboutUs"
import GiftPacks from "./pages/content-only/GiftPacks"
import Testimonials from "./pages/content-only/Testimonials"
import FooterBanner from "./common/banners/FooterBanner"
import Cancellations from "./pages/content-only/Cancellations"
import TC from "./pages/content-only/TandC"
import PrivacyPolicy from "./pages/content-only/PrivacyPolicy"
import BuyTheorem from "./pages/Checkout/BuyTheorem"
import Checkout from "./pages/Checkout/CheckoutContainer"
import CertificateExample from "./pages/content-only/CertificateExample"
import Register from "./pages/Session/Register"

class App extends Component {
  static displayName = 'App';

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {

    return (
      <Provider store={this.props.store}>
        <Router history={history}>
          <Fragment>
            <HeaderBanner/>
            <Switch>
              <Route exact name='Home Page' path='/' component={Home}/>
              <Route  name='F.A.Q.' path='/faq' component={Faq}/>
              <Route  name='About' path='/about' component={About}/>
              <Route  name='Gifts' path='/gifts' component={GiftPacks}/>
              <Route  name='Testimonials' path='/testimonials' component={Testimonials}/>
              <Route  name='Cancellations' path='/cancellations' component={Cancellations}/>
              <Route  name='Terms ans Conditions' path='/tc' component={TC}/>
              <Route  name='Certificate Example' path='/certificate' component={CertificateExample}/>
              <Route  name='Privacy Policy' path='/privacy' component={PrivacyPolicy}/>
              <Route  name='Discover' path='/discover' component={BuyTheorem}/>
              <Route  name='Checkout' path='/checkout' component={Checkout}/>
              <Route  name='Register' path='/register' component={Register}/>
              <Redirect to='/'/>
            </Switch>
            <FooterBanner/>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

