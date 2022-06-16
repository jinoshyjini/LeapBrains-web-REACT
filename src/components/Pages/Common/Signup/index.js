import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../assets/css/login.less"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });
    }

    render() {

        return (
            <>
                <div className="login vertical-center">
                    <div className="vertical-center">
                        <h1 className="login_title text-center">Sign Up</h1>
                        <ul className="list-inlibeblock text-center login_social-icon">
                            <li>
                                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0H38.5C44.0228 0 48.5 4.47715 48.5 10V38C48.5 43.5228 44.0228 48 38.5 48H10.5C4.97715 48 0.5 43.5228 0.5 38V10Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M35.54 24.2613C35.54 23.4459 35.4668 22.6618 35.3309 21.9091H24.5V26.3575H30.6891C30.4225 27.795 29.6123 29.0129 28.3943 29.8284V32.7138H32.1109C34.2855 30.7118 35.54 27.7636 35.54 24.2613Z" fill="#4285F4" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.5 35.4998C27.605 35.4998 30.2081 34.47 32.1109 32.7137L28.3943 29.8282C27.3645 30.5182 26.0472 30.9259 24.5 30.9259C21.5047 30.9259 18.9695 28.903 18.0652 26.1848H14.2231V29.1644C16.1154 32.9228 20.0045 35.4998 24.5 35.4998Z" fill="#34A853" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.0652 26.1851C17.8352 25.4951 17.7045 24.7581 17.7045 24.0001C17.7045 23.2422 17.8352 22.5051 18.0652 21.8151V18.8356H14.2232C13.4443 20.3881 13 22.1444 13 24.0001C13 25.8558 13.4443 27.6122 14.2232 29.1647L18.0652 26.1851Z" fill="#FBBC05" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.5 17.0739C26.1884 17.0739 27.7043 17.6541 28.8961 18.7936L32.1945 15.4952C30.2029 13.6395 27.5997 12.5 24.5 12.5C20.0045 12.5 16.1154 15.077 14.2231 18.8355L18.0652 21.815C18.9695 19.0968 21.5047 17.0739 24.5 17.0739Z" fill="#EA4335" />
                                    <path d="M10.5 2H38.5V-2H10.5V2ZM46.5 10V38H50.5V10H46.5ZM38.5 46H10.5V50H38.5V46ZM2.5 38V10H-1.5V38H2.5ZM10.5 46C6.08172 46 2.5 42.4183 2.5 38H-1.5C-1.5 44.6274 3.87258 50 10.5 50V46ZM46.5 38C46.5 42.4183 42.9183 46 38.5 46V50C45.1274 50 50.5 44.6274 50.5 38H46.5ZM38.5 2C42.9183 2 46.5 5.58172 46.5 10H50.5C50.5 3.37258 45.1274 -2 38.5 -2V2ZM10.5 -2C3.87258 -2 -1.5 3.37258 -1.5 10H2.5C2.5 5.58172 6.08172 2 10.5 2V-2Z" fill="black" fill-opacity="0.1" />
                                </svg>
                            </li>
                            <li>
                                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0H38.5C44.0229 0 48.5 4.47715 48.5 10V38C48.5 43.5229 44.0228 48 38.5 48H10.5C4.97715 48 0.5 43.5228 0.5 38V10Z" fill="#1877F2" />
                                    <rect width="24" height="24" transform="translate(12.5 12)" fill="#1877F2" />
                                    <path d="M36 24.0699C36 17.7186 30.8513 12.5699 24.5 12.5699C18.1487 12.5699 13 17.7186 13 24.0699C13 29.8099 17.2054 34.5674 22.7031 35.4302V27.3941H19.7832V24.0699H22.7031V21.5363C22.7031 18.6541 24.42 17.0621 27.0468 17.0621C28.305 17.0621 29.6211 17.2867 29.6211 17.2867V20.1168H28.171C26.7424 20.1168 26.2969 21.0032 26.2969 21.9127V24.0699H29.4863L28.9765 27.3941H26.2969V35.4302C31.7946 34.5674 36 29.8099 36 24.0699Z" fill="white" />
                                </svg>
                            </li>
                        </ul>

                        <div className="card login_card-container">
                            <p className="or"><span>or</span></p>
                            <Form className="login_form mb-3">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <p className="cta--text mb-1">Must contain 10 symbols and at least 1 number</p>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Confirm password"
                                    />
                                </div>
                                <div className="form-group">
                                <Link to="/Roles">
                                    <Button
                                        className="btn cta--rounded cta-primary"
                                        disabled={this.state.loading}
                                    >
                                        {this.state.loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        <span>Sign In</span>
                                    </Button>
                                    </Link>
                                </div>
                            </Form>
                            <p className="cta cta--center">Already have an account? <Link className="cta--underline" to="/">Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;