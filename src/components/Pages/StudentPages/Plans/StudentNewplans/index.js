import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select'
import "../../../../../assets/css/studentnewplan.less"


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            UniversityCheckBox: false,
            ProfessionsCheckBox: false,
            GPACheckBox: false,
        };
    }
    handleCheckboxChange(e, buttonName) {
        let { UniversityCheckBox, ProfessionsCheckBox, GPACheckBox } = this.state;
        console.log('value of checkbox : ' + buttonName, e.target.checked);
        if (buttonName === "universities") {
            UniversityCheckBox = e.target.checked
        } else if (buttonName === "profession") {
            ProfessionsCheckBox = e.target.checked
        } else if (buttonName === "GPA") {
            GPACheckBox = e.target.checked
        }
        this.setState({ UniversityCheckBox, ProfessionsCheckBox, GPACheckBox })
    }
    render() {
        let { UniversityCheckBox, ProfessionsCheckBox, GPACheckBox } = this.state;
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
                <div className="login goals vertical-center">
                    <div className="">
                        <div className="Templates_2 text-center role">
                            <h1 className="login_title text-center">Create new plan</h1>

                            <div className="abovecnt">
                                <input type="text" className="profile__form__inputs textbox" placeholder="Plan Name" />
                            </div>
                            <p>Choose a goal in this plan</p>
                            <div className="btn-group">
                                <div className="role__btns">
                                    <input type="checkbox" defaultChecked={UniversityCheckBox} onClick={(e) => this.handleCheckboxChange(e, 'universities')} className="btn-check" name="options1" id="btncheck1" autoComplete="off" />
                                    <label className="btn cta--role--btn" htmlFor="btncheck1">Get into specific universities</label>
                                </div>
                                <div className="role__btns">
                                    <input type="checkbox" defaultChecked={ProfessionsCheckBox} onClick={(e) => this.handleCheckboxChange(e, 'profession')} className="btn-check" name="options2" id="btncheck2" autoComplete="off" />
                                    <label className="btn cta--role--btn" htmlFor="btncheck2">Get into a specific profession</label>
                                </div>
                                <div className="role__btns">
                                    <input type="checkbox" defaultChecked={GPACheckBox} onClick={(e) => this.handleCheckboxChange(e, 'GPA')} className="btn-check" name="options3" id="btncheck3" autoComplete="off" />
                                    <label className="btn cta--role--btn" htmlFor="btncheck3">Improve my GPA</label>
                                </div>
                            </div>

                            <div className="goals__form">
                                {UniversityCheckBox &&
                                    <Select className="goals__form__select mb-3" closeMenuOnSelect={false} isMulti options={UniversityOptionstions} />
                                }
                                {ProfessionsCheckBox &&
                                    <Select
                                        className="goals__form__select mb-3"
                                        closeMenuOnSelect={false}
                                        isMulti
                                        options={ProfessionsOptionstions}
                                    />
                                }
                                {GPACheckBox &&
                                    <input type="text" className="goals__form__inputs" placeholder="GPA" />
                                }
                            </div>
                            <div className="goals__form">
                                <Select className="goals__form__select mb-3" closeMenuOnSelect={false} placeholder="Assign existing advisor" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer row">
                    <div className="footer__left col-sm-4" >
                        <p>1 out of 2 steps</p>
                    </div>
                    <div className="footer__center col-sm-4 text-center">
                    </div>
                    <div className="footer__right col-sm-4 text-right">
                        <Link className="footer__cta" to="/Plans">Next step</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;