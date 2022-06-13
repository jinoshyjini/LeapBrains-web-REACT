import React, { Component } from 'react';
import '../../assets/css/footer.less';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="footer row">
          <div className="footer__left col-sm-4">
            <p>
              <a className="footer__left__cta">
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.80474 0.195262C5.54439 -0.0650874 5.12228 -0.0650874 4.86193 0.195262L0.195262 4.86193C-0.0650873 5.12228 -0.0650873 5.54439 0.195262 5.80474L4.86193 10.4714C5.12228 10.7318 5.54439 10.7318 5.80474 10.4714C6.06509 10.2111 6.06509 9.78894 5.80474 9.52859L1.60948 5.33333L5.80474 1.13807C6.06509 0.877722 6.06509 0.455612 5.80474 0.195262Z" fill="#1B1C1E"/>
                </svg>
                <span>Go back</span>
              </a>
            </p>
          </div>
          <div className="footer__center col-sm-4 text-center">
            <p>1 out of 5 steps</p>
          </div>
          <div className="footer__right col-sm-4 text-right">
            <Link className="footer__cta" to="/Newprofile">Next step</Link>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;