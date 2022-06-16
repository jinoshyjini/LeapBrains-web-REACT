import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            UniversityCheckBox:false,
            ProfessionsCheckBox:false,
            GPACheckBox:false,
        };
    }
    handleCheckboxChange(e,buttonName) {
        let {UniversityCheckBox,ProfessionsCheckBox,GPACheckBox} = this.state;
        console.log('value of checkbox : ' + buttonName , e.target.checked);
        if(buttonName === "universities"){
            UniversityCheckBox = e.target.checked
        } else if(buttonName === "profession"){
            ProfessionsCheckBox = e.target.checked
        } else if(buttonName === "GPA"){
            GPACheckBox = e.target.checked
        }
        this.setState({UniversityCheckBox,ProfessionsCheckBox,GPACheckBox})
    }
    render() {
        let {UniversityCheckBox,ProfessionsCheckBox,GPACheckBox} = this.state;
        const UniversityOptionstions = [
            { value: 'UCLA', label: 'UCLA' },
            { value: 'Stanford University', label: 'Stanford University' },
            { value: 'Stanford University1', label: 'Stanford University' },
            { value: 'Stanford University2', label: 'Stanford University' }
        ];
        const ProfessionsOptionstions = [
            { value: 'Software Engineer', label: 'Software Engineer' },
            { value: 'Software Developer', label: 'Software Developer' }
        ];
        return (
            <>
                <div className="full-height">
                    <div className="vertical-center height-75">
                        <div className="container full-height">
                            <div className="Templates_2 text-center role">
                                <h1 className="login_title text-center">What do you hope to gain from LeapBrains?</h1>
                                <p className="login_desc text-center bluetext">Choose as many options as you want.</p>
                                <div className="goals_page">
                                    <div className="mb-2 role__btns">
                                        <input type="checkbox" defaultChecked={UniversityCheckBox} onClick={(e) => this.handleCheckboxChange(e,'universities')} className="btn-check" name="options1" id="btncheck1" autoComplete="off" />
                                        <label className="btn cta--role--btn" htmlFor="btncheck1">Get into specific universities</label>
                                    </div>
                                    <div className=" mb-2 role__btns">
                                        <input type="checkbox" defaultChecked={ProfessionsCheckBox} onClick={(e) => this.handleCheckboxChange(e,'profession')} className="btn-check" name="options2" id="btncheck2" autoComplete="off" />
                                        <label className="btn cta--role--btn" htmlFor="btncheck2">Get into a specific profession</label>
                                    </div>
                                    <div className=" mb-2 role__btns">
                                        <input type="checkbox" defaultChecked={GPACheckBox} onClick={(e) => this.handleCheckboxChange(e,'GPA')} className="btn-check" name="options3" id="btncheck3" autoComplete="off" />
                                        <label className="btn cta--role--btn" htmlFor="btncheck3">Improve my GPA</label>
                                    </div>
                                </div>

                                <div className="goals__form">
                                    {UniversityCheckBox &&
                                        <div className="row">
                                            <div className="col-md-12 mb-2 role__btns">
                                                <Select
                                                    className="goals__form__select mb-3"
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    options={UniversityOptionstions}
                                                />
                                            </div>
                                        </div>
                                    }
                                    {ProfessionsCheckBox &&
                                        <div className="row">
                                            <div className="col-md-12 mb-2 role__btns">
                                                <Select
                                                    className="goals__form__select mb-3"
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    options={ProfessionsOptionstions}
                                                />
                                            </div>
                                        </div>
                                    }
                                    {GPACheckBox &&
                                        <div className="row">
                                            <div className="col-md-12 mb-2 role__btns">
                                                <input type="text" className="goals__form__inputs" placeholder="GPA" />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="footer">
                                <div className="row m-0">
                                    <div className="footer__left col-md-4 col-sm-4 col-4 text-center p-0">
                                        <p>
                                            <Link to="/Roles" className="footer__left__cta">
                                                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.80474 0.195262C5.54439 -0.0650874 5.12228 -0.0650874 4.86193 0.195262L0.195262 4.86193C-0.0650873 5.12228 -0.0650873 5.54439 0.195262 5.80474L4.86193 10.4714C5.12228 10.7318 5.54439 10.7318 5.80474 10.4714C6.06509 10.2111 6.06509 9.78894 5.80474 9.52859L1.60948 5.33333L5.80474 1.13807C6.06509 0.877722 6.06509 0.455612 5.80474 0.195262Z" fill="#1B1C1E" />
                                                </svg>
                                                <span>Go back</span>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="footer__center col-md-4 col-sm-4 col-4 text-center">
                                        <p>2 out of 5 steps</p>
                                    </div>
                                    <div className="footer__right col-md-4 col-sm-4 col-4 text-center">
                                        <Link className="footer__cta" to="/Newprofile">Next step</Link>
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