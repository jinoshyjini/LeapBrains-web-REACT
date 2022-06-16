import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../assets/css/common.less"
class Index extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="full-height">
          <div className="vertical-center height-75">
            <div className="container full-height">
              <div className="Templates_2 text-center role">
                <h1 className="login_title text-center">Select your role</h1>
                <p className="login_desc text-center bluetext">Choose one option as you want</p>

                <div className="roles_page">
                  <div className="mb-2 role__btns ">
                    <input type="radio" className="btn-check" name="options" id="btncheck1" autoComplete="off" />
                    <label className="btn cta--role--btn" htmlFor="btncheck1">I’m a Student</label>
                  </div>
                  <div className="mb-2 role__btns ">
                    <input type="radio" className="btn-check" name="options" id="btncheck2" autoComplete="off" />
                    <label className="btn cta--role--btn" htmlFor="btncheck2">I’m a Parent</label>
                  </div>
                  <div className="mb-2 role__btns ">
                    <input type="radio" className="btn-check" name="options" id="btncheck3" autoComplete="off" />
                    <label className="btn cta--role--btn" htmlFor="btncheck3">I’m an Advisor</label>
                  </div>
                </div>
              </div>
              <div className="footer">
                <div className="row m-0">
                  <div className="footer__left col-md-4 col-sm-4 d-sm-block d-none">
                  </div>
                  <div className="footer__center col-md-4 col-sm-4 col-6 text-center">
                    <p>1 out of 5 steps</p>
                  </div>
                  <div className="footer__right col-md-4 col-sm-4 col-6 text-center">
                    <Link className="footer__cta" to="/Goals">Next step</Link>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </>
    );
  }
}

export default Index;