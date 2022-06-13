import React, { Component } from "react";
import Select from 'react-select'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isShowPan:false,
        };
    }
    handleShowPlan(e) {
        e.preventDefault()
        this.setState({isShowPan:true})
    }
    handleClickAddPhase(e) {
        e.preventDefault();
        var count = document.getElementsByClassName("initial_plan_parent").length;
        let menu = document.querySelector('#initial_plan_parent');
        
        let clonedMenu = menu.cloneNode(true);
        clonedMenu.id = 'menu-mobile';
        var child = clonedMenu.firstChild;
        child.innerHTML = "Phase" + parseInt (parseInt(count) + 1) + ":" ;
        document.getElementById("initial_plan_clone").appendChild(clonedMenu);
    }
    render() {
        let {isShowPan} = this.state;
        const options = [
            { value: '2021 (1-st semestre)', label: '2021 (1-st semestre)' },
            { value: '2021 (2-st semestre)', label: '2021 (2-st semestre)' },
            { value: '2022 (1-st semestre)', label: '2022 (1-st semestre)' },
            { value: '2022 (2-nd semestre)', label: '2022 (2-nd semestre)' },
            { value: '2023 (1-st semestre)', label: '2023 (1-st semestre)' },
            { value: '2023 (2-nd semestre)', label: '2023 (2-nd semestre)' }
        ]
        const options1 = [
            { value: '2021 (1-st semestre)', label: '2021 (1-st semestre)' },
            { value: '2021 (2-st semestre)', label: '2021 (2-st semestre)' },
            { value: '2022 (1-st semestre)', label: '2022 (1-st semestre)' },
            { value: '2022 (2-nd semestre)', label: '2022 (2-nd semestre)' },
            { value: '2023 (1-st semestre)', label: '2023 (1-st semestre)' },
            { value: '2023 (2-nd semestre)', label: '2023 (2-nd semestre)' }
        ]
        const options2 = [
            { value: 'Academic Regular', label: 'Academic Regular' },
            { value: 'Academic Accelerated', label: 'Academic Accelerated' },
            { value: 'Academic Honors', label: 'Academic Honors' },
            { value: 'Academic AP/College level', label: 'Academic AP/College level' },
            { value: 'Desired Grade', label: 'Desired Grade' }
        ]
        const style1 = {
            control: (base, state) => ({
              ...base,
              border: "0 !important",
              boxShadow: "0 !important",
              "&:hover": {
                border: "0 !important"
              }
            })
        };
        return (
            <>
                <div className="initial_plan">
                    <h1 className="login_title text-center mt-5 mb-5">Set up your initial plan</h1>
                    <div id="initial_plan_clone">
                        <div className="initial_plan_parent mb-3" id="initial_plan_parent">
                            <h4 className="Phase_count">Phase 1:</h4>
                            <div className="row m-0  mb-2">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-3 p-0"><p className="initial_plan_label">Starts in:</p></div>
                                        <div className="col-9 p-0">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.4688 3.23438H12.5156V2.10938C12.5156 2.03203 12.4523 1.96875 12.375 1.96875H11.3906C11.3133 1.96875 11.25 2.03203 11.25 2.10938V3.23438H6.75V2.10938C6.75 2.03203 6.68672 1.96875 6.60938 1.96875H5.625C5.54766 1.96875 5.48438 2.03203 5.48438 2.10938V3.23438H2.53125C2.22012 3.23438 1.96875 3.48574 1.96875 3.79688V15.4688C1.96875 15.7799 2.22012 16.0312 2.53125 16.0312H15.4688C15.7799 16.0312 16.0312 15.7799 16.0312 15.4688V3.79688C16.0312 3.48574 15.7799 3.23438 15.4688 3.23438ZM14.7656 14.7656H3.23438V8.08594H14.7656V14.7656ZM3.23438 6.89062V4.5H5.48438V5.34375C5.48438 5.42109 5.54766 5.48438 5.625 5.48438H6.60938C6.68672 5.48438 6.75 5.42109 6.75 5.34375V4.5H11.25V5.34375C11.25 5.42109 11.3133 5.48438 11.3906 5.48438H12.375C12.4523 5.48438 12.5156 5.42109 12.5156 5.34375V4.5H14.7656V6.89062H3.23438Z" fill="#BFBFBF"/>
                                            </svg>
                                            <div className="react-select-noborder">
                                                <Select placeholder="Choose year" styles={style1}  options={options}  components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} />
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-3 p-0"><p className="initial_plan_label">Ends in:</p></div>
                                        <div className="col-9 p-0">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.4688 3.23438H12.5156V2.10938C12.5156 2.03203 12.4523 1.96875 12.375 1.96875H11.3906C11.3133 1.96875 11.25 2.03203 11.25 2.10938V3.23438H6.75V2.10938C6.75 2.03203 6.68672 1.96875 6.60938 1.96875H5.625C5.54766 1.96875 5.48438 2.03203 5.48438 2.10938V3.23438H2.53125C2.22012 3.23438 1.96875 3.48574 1.96875 3.79688V15.4688C1.96875 15.7799 2.22012 16.0312 2.53125 16.0312H15.4688C15.7799 16.0312 16.0312 15.7799 16.0312 15.4688V3.79688C16.0312 3.48574 15.7799 3.23438 15.4688 3.23438ZM14.7656 14.7656H3.23438V8.08594H14.7656V14.7656ZM3.23438 6.89062V4.5H5.48438V5.34375C5.48438 5.42109 5.54766 5.48438 5.625 5.48438H6.60938C6.68672 5.48438 6.75 5.42109 6.75 5.34375V4.5H11.25V5.34375C11.25 5.42109 11.3133 5.48438 11.3906 5.48438H12.375C12.4523 5.48438 12.5156 5.42109 12.5156 5.34375V4.5H14.7656V6.89062H3.23438Z" fill="#BFBFBF"/>
                                            </svg>
                                            <div className="react-select-noborder">
                                                <Select placeholder="Choose year" styles={style1} options={options} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} />
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isShowPan && 
                                <div className="row m-0"  >
                                    <div className="col-12 p-0 mb-4">
                                        <div className="">
                                            <input type="text" className="goals__form__inputs mb-2" placeholder="Course Name" />
                                        </div>
                                    </div>
                                    <div className="col-12 p-0 mb-4">
                                        <div className="">
                                            <Select placeholder="Course type" options={options2} />
                                        </div>
                                    </div>
                                </div>
                            }
                        
                            <div className="row m-0">
                                <div className="col-6 p-0">
                                    <a href="" className="cta cta--rounded cta--plan m-0" onClick={(e) => this.handleShowPlan(e)} >
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16658 2.33301C9.16658 2.06779 9.06123 1.81344 8.87369 1.6259C8.68615 1.43836 8.4318 1.33301 8.16658 1.33301C7.90137 1.33301 7.64701 1.43836 7.45948 1.6259C7.27194 1.81344 7.16658 2.06779 7.16658 2.33301V6.66634H2.83325C2.56804 6.66634 2.31368 6.7717 2.12615 6.95923C1.93861 7.14677 1.83325 7.40112 1.83325 7.66634C1.83325 7.93156 1.93861 8.18591 2.12615 8.37345C2.31368 8.56098 2.56804 8.66634 2.83325 8.66634H7.16658V12.9997C7.16658 13.2649 7.27194 13.5192 7.45948 13.7068C7.64701 13.8943 7.90137 13.9997 8.16658 13.9997C8.4318 13.9997 8.68615 13.8943 8.87369 13.7068C9.06123 13.5192 9.16658 13.2649 9.16658 12.9997V8.66634H13.4999C13.7651 8.66634 14.0195 8.56098 14.207 8.37345C14.3946 8.18591 14.4999 7.93156 14.4999 7.66634C14.4999 7.40112 14.3946 7.14677 14.207 6.95923C14.0195 6.7717 13.7651 6.66634 13.4999 6.66634H9.16658V2.33301Z" fill="#1B1C1E"/>
                                        </svg>
                                        Add Course
                                    </a>
                                </div>
                                <div className="col-6 pe-0">
                                    <a href="" className="cta cta--rounded cta--plan m-0" onClick={(e) => this.handleShowPlan(e)} >
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.16658 2.33301C9.16658 2.06779 9.06123 1.81344 8.87369 1.6259C8.68615 1.43836 8.4318 1.33301 8.16658 1.33301C7.90137 1.33301 7.64701 1.43836 7.45948 1.6259C7.27194 1.81344 7.16658 2.06779 7.16658 2.33301V6.66634H2.83325C2.56804 6.66634 2.31368 6.7717 2.12615 6.95923C1.93861 7.14677 1.83325 7.40112 1.83325 7.66634C1.83325 7.93156 1.93861 8.18591 2.12615 8.37345C2.31368 8.56098 2.56804 8.66634 2.83325 8.66634H7.16658V12.9997C7.16658 13.2649 7.27194 13.5192 7.45948 13.7068C7.64701 13.8943 7.90137 13.9997 8.16658 13.9997C8.4318 13.9997 8.68615 13.8943 8.87369 13.7068C9.06123 13.5192 9.16658 13.2649 9.16658 12.9997V8.66634H13.4999C13.7651 8.66634 14.0195 8.56098 14.207 8.37345C14.3946 8.18591 14.4999 7.93156 14.4999 7.66634C14.4999 7.40112 14.3946 7.14677 14.207 6.95923C14.0195 6.7717 13.7651 6.66634 13.4999 6.66634H9.16658V2.33301Z" fill="#1B1C1E"/>
                                        </svg>
                                        Add Activity
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-12 p-0 text-center mt-4">
                            <a href="" onClick={(e) => this.handleClickAddPhase(e)}  className=""><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.16658 2.33301C9.16658 2.06779 9.06123 1.81344 8.87369 1.6259C8.68615 1.43836 8.4318 1.33301 8.16658 1.33301C7.90137 1.33301 7.64701 1.43836 7.45948 1.6259C7.27194 1.81344 7.16658 2.06779 7.16658 2.33301V6.66634H2.83325C2.56804 6.66634 2.31368 6.7717 2.12615 6.95923C1.93861 7.14677 1.83325 7.40112 1.83325 7.66634C1.83325 7.93156 1.93861 8.18591 2.12615 8.37345C2.31368 8.56098 2.56804 8.66634 2.83325 8.66634H7.16658V12.9997C7.16658 13.2649 7.27194 13.5192 7.45948 13.7068C7.64701 13.8943 7.90137 13.9997 8.16658 13.9997C8.4318 13.9997 8.68615 13.8943 8.87369 13.7068C9.06123 13.5192 9.16658 13.2649 9.16658 12.9997V8.66634H13.4999C13.7651 8.66634 14.0195 8.56098 14.207 8.37345C14.3946 8.18591 14.4999 7.93156 14.4999 7.66634C14.4999 7.40112 14.3946 7.14677 14.207 6.95923C14.0195 6.7717 13.7651 6.66634 13.4999 6.66634H9.16658V2.33301Z" fill="#1B1C1E"/>
                                </svg>Add Phase</a>
                        </div>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default Index;
