import React, { Component } from "react";
import Sidebar from "../../../Layout/Sidebar";
import "../../../../assets/css/work.less";
import { Button } from "react-bootstrap";
import TwoUserIcons from "../../../CommonComponents/TwoUserIcons";
import Avatar1 from "../../../../assets/images/icons/Avatar1.png";
import Avatar2 from "../../../../assets/images/icons/Avatar2.png";
import { Link } from "react-router-dom";
class Index extends Component {
    state = {}
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
                <div className="box-models ">
                    <div className="cnts">
                        <div className="row">
                            <div className="col-6">
                                <h1>My work</h1>
                            </div>
                            <div className="col-6 btnscnt">
                                <Link to="/StudentNewplans">
                                <Button className="btns cta--rounded cta-primary" >
                                    <span>Create new plan</span>
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="btmcnts">
                        <Link to="/StudentNewplans">
                        <div className="addbox">
                            <div className="addboxcnt">
                                <div>
                                    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M38 0.5C38.8288 0.5 39.6237 0.829241 40.2097 1.41529C40.7958 2.00134 41.125 2.7962 41.125 3.625V34.875H72.375C73.2038 34.875 73.9987 35.2042 74.5847 35.7903C75.1708 36.3763 75.5 37.1712 75.5 38C75.5 38.8288 75.1708 39.6237 74.5847 40.2097C73.9987 40.7958 73.2038 41.125 72.375 41.125H41.125V72.375C41.125 73.2038 40.7958 73.9987 40.2097 74.5847C39.6237 75.1708 38.8288 75.5 38 75.5C37.1712 75.5 36.3763 75.1708 35.7903 74.5847C35.2042 73.9987 34.875 73.2038 34.875 72.375V41.125H3.625C2.7962 41.125 2.00134 40.7958 1.41529 40.2097C0.829241 39.6237 0.5 38.8288 0.5 38C0.5 37.1712 0.829241 36.3763 1.41529 35.7903C2.00134 35.2042 2.7962 34.875 3.625 34.875H34.875V3.625C34.875 2.7962 35.2042 2.00134 35.7903 1.41529C36.3763 0.829241 37.1712 0.5 38 0.5Z" fill="#3F51B5" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                        </Link>
                    </div>
                    <div className="addboxdown">
                        <p>You do not have any plans yet. Do you want an advisor to create it for you?</p>
                    </div>
                    <div className="addboxdown">
                    <TwoUserIcons AvatarIconData={AvatarIconData} />                   
                        <h6>Explore advisors
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66663 7.99967C2.66663 7.63148 2.9651 7.33301 3.33329 7.33301H12.6666C13.0348 7.33301 13.3333 7.63148 13.3333 7.99967C13.3333 8.36786 13.0348 8.66634 12.6666 8.66634H3.33329C2.9651 8.66634 2.66663 8.36786 2.66663 7.99967Z" fill="#3F51B5" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52864 2.86225C7.78899 2.6019 8.2111 2.6019 8.47145 2.86225L13.1381 7.52892C13.3985 7.78927 13.3985 8.21138 13.1381 8.47173L8.47145 13.1384C8.2111 13.3987 7.78899 13.3987 7.52864 13.1384C7.26829 12.878 7.26829 12.4559 7.52864 12.1956L11.7239 8.00033L7.52864 3.80506C7.26829 3.54471 7.26829 3.1226 7.52864 2.86225Z" fill="#3F51B5" />
                                </svg>
                            </span>
                        </h6>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;