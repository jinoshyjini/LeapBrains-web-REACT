import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../assets/css/footer.less"

class Index extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="login vertical-center">
          <div className="vertical-center">
            <div className="Templates_2 text-center role">
              <h1 className="login_title text-center">Select your role</h1>
              <p className="login_desc text-center bluetext">Choose one option as you want</p>

              <div class="btn-group">
                <div className="role__btns">
                  <input type="radio" class="btn-check" name="options" id="btncheck1" autoComplete="off" />
                  <label class="btn cta--role--btn" for="btncheck1">I’m a Student</label>
                </div>
                <div className="role__btns">
                  <input type="radio" class="btn-check" name="options" id="btncheck2" autoComplete="off" />
                  <label class="btn cta--role--btn" for="btncheck2">I’m a Parent</label>
                </div>
                <div className="role__btns">
                  <input type="radio" class="btn-check" name="options" id="btncheck3" autoComplete="off" />
                  <label class="btn cta--role--btn" for="btncheck3">I’m an Advisor</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer row">
          <div className="footer__left col-sm-4">
            {/* <p>
              <Link to="/">
              <a className="footer__left__cta">
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.80474 0.195262C5.54439 -0.0650874 5.12228 -0.0650874 4.86193 0.195262L0.195262 4.86193C-0.0650873 5.12228 -0.0650873 5.54439 0.195262 5.80474L4.86193 10.4714C5.12228 10.7318 5.54439 10.7318 5.80474 10.4714C6.06509 10.2111 6.06509 9.78894 5.80474 9.52859L1.60948 5.33333L5.80474 1.13807C6.06509 0.877722 6.06509 0.455612 5.80474 0.195262Z" fill="#1B1C1E"/>
                </svg>
                <span>Go back</span>
              </a>
              </Link>
            </p> */}
          </div>
          <div className="footer__center col-sm-4 text-center">
            <p>1 out of 5 steps</p>
          </div>
          <div className="footer__right col-sm-4 text-right">
            <Link className="footer__cta" to="/Goals">Next step</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Index;