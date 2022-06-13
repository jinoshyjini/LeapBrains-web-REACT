import React, { Component } from 'react';
import '../../assets/css/navBar.less';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <>
                <div>
                    <nav className="sb-topnav navbar navbar-expand ">
                        <div className='navbar__brand text-center'>
                            <Link to="/Dashboard">
                                <svg width="50" height="50" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1 14.3614V40.1398L24.5498 52.5123V26.8633L48.5387 13.5015L24.7693 1L1 13.5015V14.3614Z" stroke="white" strokeWidth="1.98415" strokeLinejoin="round"/>
                                <path d="M24.113 52.6923L48.9998 39.4866V13.5811L24.113 27.4391" stroke="white" strokeWidth="1.98415" strokeLinejoin="round"/>
                                <path d="M11.1683 44.5337V20.4134L36.2345 7.0498" stroke="white" strokeWidth="1.98415" strokeLinejoin="round"/>
                                </svg>
                            </Link>    
                        </div>
                        <div className='navbar__header'>
                            <h5 className='welcometext'>Hi, User</h5>
                            <p className='welcometext-p'>It’s good to see you again.</p>
                        </div>

                    </nav>
                </div>
            </>
        );
    }
}

export default Navbar;