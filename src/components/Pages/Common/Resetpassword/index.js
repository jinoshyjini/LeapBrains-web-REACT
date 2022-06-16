import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Index extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="vertical-center ">
                    <div className="container">
                        <div><h1 className="text-center">Forgot your password? We can help.</h1></div>
                        <div><p className="text-center bluetext">Enter your email below and we'll send you a reset link. </p> </div>
                        <div className="text-center w-343" >
                            <input
                                type="password"
                                className="form-control mb-3"
                                name="password"
                                placeholder="New password"
                            />
                            <input
                                type="password"
                                className="form-control mb-3"
                                name="password"
                                placeholder="Confirm password"
                            />
                            <br/>
                            <Link to="/Roles">
                            <Button className="btn cta--rounded cta-primary cta-common" disabled={this.state.loading} >
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>OK</span>
                            </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;