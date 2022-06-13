import React, { Component } from "react";
import { Button } from "react-bootstrap";
import {Link } from "react-router-dom";

class Index extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="vertical-center">
                    <div><h1 className="text-center">Verify your email</h1></div>
                    <div><p className="text-center">Please verify your email by opening the link we have sent you!</p> </div>
                    <div className="text-center" >
                        <Button className="btn cta--rounded cta-primary cta-common" disabled={this.state.loading} >
                            {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span><Link to="/Roles">OK</Link></span>
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;