import React, { Component } from "react";
import "../../../../../assets/css/work.less"
import Search from "../../../../CommonComponents/Search";
import { Button } from "react-bootstrap";
import advisorimage from "../../../../../assets/images/icons/Avatar1.png"
import secondadvisorimage from "../../../../../assets/images/icons/Avatar2.png"
import TwoUserIcons from "../../../../CommonComponents/TwoUserIcons";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Plans: [
                {
                    id: 1,
                    status: "Active",
                    goal: "Get into university",
                    coursename:"Algebra",
                    planname: "Admission to Cambridge",
                    data: "2021, (1- semestre)",
                    advisorname: true
                },
                {
                    id: 2,
                    status: "Ongoing",
                    goal: "Improve GPA",
                    coursename:"Economics",
                    planname: "Admission to Cambridge",
                    data: "2021, (1- semestre)",
                    advisorname: true
                },
                {
                    id: 3,
                    status: "Completed",
                    goal: "Profession",
                    coursename:"History",
                    planname: "Admission to Cambridge",
                    data: "2021, (1- semestre)",
                    advisorname: true
                },
                {
                    id: 4,
                    status: "Not started",
                    goal: "Improve GPA",
                    coursename:"Science",
                    planname: "Algebra",
                    data: "2022, (2- semestre)",
                    advisorname: true,
                },
                {
                    id: 5,
                    status: "Ongoing",
                    goal: "Improve GPA",
                    coursename:"Industry",
                    planname: "Economy",
                    data: "2021, (1- semestre)",
                    advisorname: true
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
                    <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-sm-6 cardsection">
                        <div className="card coursecards">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <Button className="coursebtns" style={{  'border': "none", 'backgroundColor': element.status === 'Active' ? '#1C84EE' : element.status === 'Ongoing' ? '#FFA000' : element.status === 'Completed' ? '#009317' : element.status === 'Not started' ? '#E64A19' : '#1C84EE'}}>{element.status}</Button>
                                    </div>
                                    <div className="col" style={{ textAlign: "right" }}>
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.6 3.2C0.716344 3.2 0 2.48366 0 1.6C0 0.716344 0.716344 0 1.6 0C2.48366 0 3.2 0.716344 3.2 1.6C3.2 2.48366 2.48366 3.2 1.6 3.2ZM7.99844 3.2C7.11478 3.2 6.39844 2.48366 6.39844 1.6C6.39844 0.716344 7.11478 0 7.99844 0C8.88209 0 9.59844 0.716344 9.59844 1.6C9.59844 2.48366 8.88209 3.2 7.99844 3.2ZM12.8 1.6C12.8 2.48366 13.5163 3.2 14.4 3.2C15.2836 3.2 16 2.48366 16 1.6C16 0.716344 15.2836 0 14.4 0C13.5163 0 12.8 0.716344 12.8 1.6Z" fill="#1B1C1E" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="coursecardcnt">
                                    <div className="courseboxcontain">{element.goal}</div>
                                    <p className="cardcoursetop">{element.coursename}</p>
                                    <p className="coursetext">Plan: <span className="subcoursetext">{element.planname}</span></p>
                                    <p className="coursetext">Phase: <span className="subcoursetext">{element.data}</span></p>
                                    {element.advisorname === false ? (
                                        <div className="advname">
                                            <p className="subtopic">No advisors</p>
                                        </div>
                                    ) :
                                        <div className="advimage">
                                            <TwoUserIcons AvatarIconData={AvatarIconData} />
                                        </div>
                                    }
                                    <div className="nextmilestonecoursetext">
                                        <h6 className="nextmilestonecoursetext">Current milestone<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 8H13.5" stroke="black" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                            <path d="M9 3.5L13.5 8L9 12.5" stroke="black" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                        </svg></h6>
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