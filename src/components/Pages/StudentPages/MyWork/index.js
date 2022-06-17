import React, { Component } from "react";
import Sidebar from "../../../Layout/Sidebar";
import "../../../../assets/css/work.less";
import { Button } from "react-bootstrap";
import TwoUserIcons from "../../../CommonComponents/TwoUserIcons";
import Avatar1 from "../../../../assets/images/icons/Avatar1.png";
import Avatar2 from "../../../../assets/images/icons/Avatar2.png";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { Row, Col, Nav } from 'react-bootstrap'
import Myplans from "./Myplans"
import MyMilestones from "./MyMilestones"
import MyCourses from "./MyCourses"


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodata: true,
            key: "Plans",
        };
    }
    setKey = (k) => {
        this.setState({
            key: k,
        });
    }

    render() {
        const AvatarIconData = [
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon'
            },
            {
                'AvatarIcon': Avatar2,
                'AvatarIconAlt': 'Avatar2-icon'
            }
        ];

        return (
            <>
                <Sidebar />
                <div className="Templates">
                    <div className="modal-contents">
                        {this.state.nodata === false ? (
                            <div className=" emptybox">
                                <div className="nodata">
                                    <div className=" innercnt">
                                        <div className="row">
                                            <div className="col align-self-start">
                                                <h1>My work</h1>
                                            </div>
                                            <div className="col align-self-end endcols" >
                                                <Link to="/StudentNewplans">
                                                    <Button className="btn planbtn"  >
                                                        Create new plan
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" centercnt">
                                        <div className="">
                                            <Link to="/StudentNewplans">
                                                <div className="">
                                                    <div className="boxadd">
                                                        <div className="boxes">
                                                            <svg className="plusicon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M50 12.5C50.8288 12.5 51.6237 12.8292 52.2097 13.4153C52.7958 14.0013 53.125 14.7962 53.125 15.625V46.875H84.375C85.2038 46.875 85.9987 47.2042 86.5847 47.7903C87.1708 48.3763 87.5 49.1712 87.5 50C87.5 50.8288 87.1708 51.6237 86.5847 52.2097C85.9987 52.7958 85.2038 53.125 84.375 53.125H53.125V84.375C53.125 85.2038 52.7958 85.9987 52.2097 86.5847C51.6237 87.1708 50.8288 87.5 50 87.5C49.1712 87.5 48.3763 87.1708 47.7903 86.5847C47.2042 85.9987 46.875 85.2038 46.875 84.375V53.125H15.625C14.7962 53.125 14.0013 52.7958 13.4153 52.2097C12.8292 51.6237 12.5 50.8288 12.5 50C12.5 49.1712 12.8292 48.3763 13.4153 47.7903C14.0013 47.2042 14.7962 46.875 15.625 46.875H46.875V15.625C46.875 14.7962 47.2042 14.0013 47.7903 13.4153C48.3763 12.8292 49.1712 12.5 50 12.5Z" fill="#3F51B5" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="endcnt">
                                        <div className="">
                                            <div className="addboxdown">
                                                <p>You do not have any plans yet. Do you want an advisor to create it for you?</p>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="addboxdown">
                                                <TwoUserIcons AvatarIconData={AvatarIconData} />
                                                <h6 className="bluetext">Explore advisors
                                                    <span>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.66663 7.99967C2.66663 7.63148 2.9651 7.33301 3.33329 7.33301H12.6666C13.0348 7.33301 13.3333 7.63148 13.3333 7.99967C13.3333 8.36786 13.0348 8.66634 12.6666 8.66634H3.33329C2.9651 8.66634 2.66663 8.36786 2.66663 7.99967Z" fill="#3F51B5" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.52864 2.86225C7.78899 2.6019 8.2111 2.6019 8.47145 2.86225L13.1381 7.52892C13.3985 7.78927 13.3985 8.21138 13.1381 8.47173L8.47145 13.1384C8.2111 13.3987 7.78899 13.3987 7.52864 13.1384C7.26829 12.878 7.26829 12.4559 7.52864 12.1956L11.7239 8.00033L7.52864 3.80506C7.26829 3.54471 7.26829 3.1226 7.52864 2.86225Z" fill="#3F51B5" />
                                                        </svg>
                                                    </span>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) :
                            <div className="">
                                <div className="innercnt">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-xl-6 align-self-start">
                                            <h3>My work</h3>
                                        </div>
                                        <div className="col-12 col-sm-12 col-xl-6 align-self-end endcols " >
                                            <div className="reveicon">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 19.999H26C26.2652 19.999 26.5196 19.8937 26.7071 19.7061C26.8946 19.5186 27 19.2642 27 18.999V5.99902C27 5.73381 26.8946 5.47945 26.7071 5.29192C26.5196 5.10438 26.2652 4.99902 26 4.99902H12C11.7348 4.99902 11.4804 5.10438 11.2929 5.29192C11.1054 5.47945 11 5.73381 11 5.99902V6.99902" stroke="black" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                                                    <path d="M13 17L10 20L13 23" stroke="black" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                                                    <path d="M22 12H6C5.73478 12 5.48043 12.1054 5.29289 12.2929C5.10536 12.4804 5 12.7348 5 13V26C5 26.2652 5.10536 26.5196 5.29289 26.7071C5.48043 26.8946 5.73478 27 6 27H20C20.2652 27 20.5196 26.8946 20.7071 26.7071C20.8946 26.5196 21 26.2652 21 26V25" stroke="black" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                                                    <path d="M19 14.999L22 11.999L19 8.99902" stroke="black" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <Link to="/StudentNewplans">
                                                <Button className="btn planbtn"  >
                                                    Create new plan
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="tabcnt">
                                        <Tab.Container id="left-tabs-example" activeKey={this.state.key}
                                            onSelect={(k) => this.setKey(k)}>
                                            <Row>
                                                <Col sm={12}>
                                                    <Nav variant="pills" >
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Plans">Plans</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Courses">Courses</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Milestones">Milestones</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                                <Col sm={12}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="Plans">
                                                            <Myplans />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Courses">
                                                            <MyCourses />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Milestones">
                                                            <MyMilestones />
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Index;