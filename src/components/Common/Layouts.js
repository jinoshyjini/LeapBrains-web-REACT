import React, { Component } from "react";
import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar"


class Layout extends Component {
    state = {}
    render() {
        return (
            <>
                <div>
                    <Navbar />
                    <Sidebar />
                </div>
            </>
        );
    }
}

export default Layout;