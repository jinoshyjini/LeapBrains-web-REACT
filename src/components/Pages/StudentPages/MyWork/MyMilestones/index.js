import React, { Component } from "react";
import "../../../../../assets/css/work.less"
import Search from "../../../../CommonComponents/Search";
import { Button } from "react-bootstrap";
import advisorimage from "../../../../../assets/images/icons/Avatar1.png"
import secondadvisorimage from "../../../../../assets/images/icons/Avatar2.png"
import ProgressBar from 'react-bootstrap/ProgressBar'
import TwoUserIcons from "../../../../CommonComponents/TwoUserIcons";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Plans: [
                {
                    id: 1,
                    status: "Active",
                    goal: "Millestone 1",
                    coursename: "Algebra",
                    planname: "Admission to Cambridge",
                    date: "2021, (1- semestre)",
                    percentage: 20,
                },
                {
                    id: 2,
                    status: "Ongoing",
                    goal: "Millestone 1",
                    coursename: "Economy",
                    planname: "Admission to Cambridge",
                    date: "2021, (1- semestre)",
                    percentage: 40,
                },
                {
                    id: 3,
                    status: "Completed",
                    goal: "Millestone 1",
                    coursename: "Science",
                    planname: "Admission to Cambridge",
                    date: "2021, (1- semestre)",
                    percentage: 80,
                },
                {
                    id: 4,
                    status: "Not started",
                    goal: "Millestone 1",
                    coursename: "Economy",
                    planname: "Algebra",
                    date: "2022, (2- semestre)",
                    percentage: 10,
                },
                {
                    id: 5,
                    status: "Ongoing",
                    goal: "Millestone 1",
                    coursename: "Algebra",
                    planname: "Economy",
                    date: "2021, (1- semestre)",
                    percentage: 40,
                },
            ]

        };
    }

    componentDidMount = () => {

    }


    render() {

        const AvatarIconData = [
            {
                'AvatarIcon': advisorimage,
                'AvatarIconAlt': 'Avatar1-icon'
            },
            {
                'AvatarIcon': secondadvisorimage,
                'AvatarIconAlt': 'Avatar2-icon'
            }
        ];
        let Plansdetails = this.state.Plans.map((element, key) => {
            return (
                <>
                    <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-sm-6 milestonecardsection">
                        <div className="card milestonecards ">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="advimage">
                                            <TwoUserIcons AvatarIconData={AvatarIconData} />
                                        </div>
                                    </div>
                                    <div className="col" style={{ textAlign: "right" }}>
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.6 3.2C0.716344 3.2 0 2.48366 0 1.6C0 0.716344 0.716344 0 1.6 0C2.48366 0 3.2 0.716344 3.2 1.6C3.2 2.48366 2.48366 3.2 1.6 3.2ZM7.99844 3.2C7.11478 3.2 6.39844 2.48366 6.39844 1.6C6.39844 0.716344 7.11478 0 7.99844 0C8.88209 0 9.59844 0.716344 9.59844 1.6C9.59844 2.48366 8.88209 3.2 7.99844 3.2ZM12.8 1.6C12.8 2.48366 13.5163 3.2 14.4 3.2C15.2836 3.2 16 2.48366 16 1.6C16 0.716344 15.2836 0 14.4 0C13.5163 0 12.8 0.716344 12.8 1.6Z" fill="#1B1C1E" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="milestonecardcnt">
                                    <div className="milestonetopictext">{element.goal}</div>
                                    <div className="milestoneend">
                                    <p className="milestonetext">Plan: <span className="submilestonetext">{element.coursename}</span></p>
                                    <p className="milestonetext">Phase: <span className="submilestonetext">{element.date}</span></p>
                                    <p className="milestonetext">Course: <span className="submilestonetext">{element.coursename}</span></p>
                                    </div>
                                    <div className="milestonepgbar">
                                        <ProgressBar variant="warning" now={element.percentage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </>
            );
        })

        return (
            <>
                <div className="">
                    <div className="topplancnt">
                        <div className="row">
                            {/* <div className="col"><Search /></div> */}
                        </div>
                        {this.state.Plans && this.state.Plans.length > 0 &&
                            <div className="row">
                                {Plansdetails}
                            </div>
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Index;