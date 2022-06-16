import React, { Component } from "react";
import "../../../../assets/css/studentprofile.less";
import { Link } from "react-router-dom";
import Select from 'react-select';

class Index extends Component {

    state = {}
    render() {
        const Gender = [
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Others', label: 'Others' }
        ]
        const Status = [
            { value: 'Student', label: 'Student' },
            { value: 'Newbie', label: 'Newbie' },
            { value: 'Married', label: 'Married' },
            { value: 'Un-Married', label: 'Un-Married' },
        ]
        return (
            <>
                <div className="full-height mt-4">
                    <div className="container full-height">
                        <div className="profile__align">
                            <div className="profile__section">
                                <h1 className="text-center">Create Profile</h1>
                                <div className="profile__form">
                                    <h5 className="profile__pi">General</h5>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <input type="text" className="profile__form__inputs" placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <input type="text" className="profile__form__inputs" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-7 col-sm-7 col-12">
                                            <input type="text" className="profile__form__inputs" placeholder="Country" />
                                        </div>
                                        <div className="col-md-5 col-sm-5 col-12">
                                            <input type="text" className="profile__form__inputs" placeholder="Zip code" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <Select
                                                className="form-control mb-4 p-0"
                                                closeMenuOnSelect={false}
                                                options={Gender}
                                                placeholder="Select Gender"
                                                isClearable
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <Select
                                                className="form-control mb-4 p-0"
                                                closeMenuOnSelect={false}
                                                options={Status}
                                                placeholder="Select Status"
                                                isClearable
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <input type="select" className="profile__form__inputs" placeholder="Graduation Year" />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <input type="select" className="profile__form__inputs" placeholder="Current GPA" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <input type="text" className="profile__form__inputs" placeholder="High School Name" />
                                        </div>
                                    </div>

                                    
                                    <p className="profile__p bluetext">Interests</p>
                                    <p className="d-flex">
                                        <input className="profile__form__checkbox" type="checkbox" id="Collaborating" name="Collaborating" value="Collaborating" />
                                        <label htmlFor="Collaborating">Collaborating with students with similar goals</label>
                                    </p>
                                    <p className="d-flex">
                                        <input className="profile__form__checkbox" type="checkbox" id="Advice" name="Advice" value="Advice" />
                                        <label htmlFor="Advice">Advice and counseling from senior students</label>
                                    </p>
                                    <p className="d-flex">
                                        <input className="profile__form__checkbox" type="checkbox" id="Professional" name="Professional" value="Professional" />
                                        <label htmlFor="Professional">Professional counseling services</label>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="footers mb-5">
                            <div className="row m-0">
                                <div className="footers__left col-md-4 col-sm-4 col-4 text-center p-0">
                                    <p>
                                        <Link to="/Goals" className="footers__left__cta">
                                            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.80474 0.195262C5.54439 -0.0650874 5.12228 -0.0650874 4.86193 0.195262L0.195262 4.86193C-0.0650873 5.12228 -0.0650873 5.54439 0.195262 5.80474L4.86193 10.4714C5.12228 10.7318 5.54439 10.7318 5.80474 10.4714C6.06509 10.2111 6.06509 9.78894 5.80474 9.52859L1.60948 5.33333L5.80474 1.13807C6.06509 0.877722 6.06509 0.455612 5.80474 0.195262Z" fill="#1B1C1E" />
                                            </svg>
                                            <span className="pl-20">Go back</span>
                                        </Link>
                                    </p>
                                </div>
                                <div className="footers__center col-md-4 col-sm-4 col-4 text-center">
                                    <p>3 out of 5 steps</p>
                                </div>
                                <div className="footers__right col-md-4 col-sm-4 col-4 text-center">
                                    <Link className="footer__cta" to="/Sendinvites">Next step</Link>
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