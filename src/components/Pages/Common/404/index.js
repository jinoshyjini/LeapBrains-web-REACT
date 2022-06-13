import React, { Component } from "react";
import {Link } from "react-router-dom";

class Index extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="vertical-center">
                    <div><h1 className="text-center">Error</h1></div>
                    <div><p className="text-center">This page is not available</p> </div>
                    <div className="text-center" ><span><Link className="cta--underline" to="/Roles">Back to home</Link></span></div>
                </div>
            </>
        );
    }
}

export default Index;