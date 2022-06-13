import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Index extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="vertical-center">
                    <div><h1 className="text-center">Forgot your password?</h1></div>
                    <div><h1 className="text-center">We can help.</h1></div>

                    <div><p className="text-center bluetext">Enter your email below and we'll send you a reset link.</p></div>

                    <center>
                        <div className="login_card-container">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                    </center>
                    <center>
                    <div className="login_card-container" >
                        <Link to="/Resetpassword">
                            <Button className="btn cta--rounded cta-primary newbtn" disabled={this.state.loading} >
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Send</span>
                            </Button>
                        </Link>
                    </div>
                    </center>
                    
                    <br />
                    <div><p className="text-center">Remember your password?<Link className="cta--underline" to="/">Sign In</Link></p></div>
                </div>
            </>
        );
    }
}

export default Index;