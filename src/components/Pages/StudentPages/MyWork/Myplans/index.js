import React, { Component } from "react";
import "../../../../../assets/css/work.less"
import Search from "../../../../CommonComponents/Search";
import { Button } from "react-bootstrap";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "blue"
        };
    }

    componentDidMount=()=>{
        
    }


    render() {

        return (
            <>
                <div className="container">
                    <div className="container topplancnt">
                        <div className="row">
                            <div className="col"><Search /></div>
                        </div>
                        <div className="container cardcnt">
                            <div className="card plancards">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <span className="planbtnss">Completed</span>
                                        </div>
                                        <div className="col" style={{ textAlign: "right" }}>
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.6 3.2C0.716344 3.2 0 2.48366 0 1.6C0 0.716344 0.716344 0 1.6 0C2.48366 0 3.2 0.716344 3.2 1.6C3.2 2.48366 2.48366 3.2 1.6 3.2ZM7.99844 3.2C7.11478 3.2 6.39844 2.48366 6.39844 1.6C6.39844 0.716344 7.11478 0 7.99844 0C8.88209 0 9.59844 0.716344 9.59844 1.6C9.59844 2.48366 8.88209 3.2 7.99844 3.2ZM12.8 1.6C12.8 2.48366 13.5163 3.2 14.4 3.2C15.2836 3.2 16 2.48366 16 1.6C16 0.716344 15.2836 0 14.4 0C13.5163 0 12.8 0.716344 12.8 1.6Z" fill="#1B1C1E" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="container cardcnt">
                                        <div className="boxcontain">Get into university</div>
                                        <div className="Topiccnt"><p className="cardtopic">Admission to Cambridge</p></div>
                                        <div className="smallsec"><p className="subtopic">2021-2022</p></div>
                                        <div className="advname"><p className="subtopic">No advisors</p></div>
                                        <div className="nextmilestone">
                                            <h6 className="nextmilestonetext">Current milestone<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 8H13.5" stroke="black" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                                <path d="M9 3.5L13.5 8L9 12.5" stroke="black" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round" />
                                            </svg></h6>
                                        </div>
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