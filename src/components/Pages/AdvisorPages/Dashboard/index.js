import React, { Component } from "react";
import Layouts from "../../../Common/Layouts"
import ModalPopup from "../../../CommonComponents/ModalPopup"
import "../../../../assets/css/common.less";
import Avatar1 from "../../../../assets/images/icons/Avatar1.png"
import Avatar2 from "../../../../assets/images/icons/Avatar2.png"

import TwoUserIcons from "../../../CommonComponents/TwoUserIcons";
import CircleAddCta from "../../../CommonComponents/CircleAddCta";
import Workspace from "../../../CommonComponents/Workspace";
import RecommendedFriends from "../../../CommonComponents/RecommendedFriends";
import DocumentsList from "../../../CommonComponents/DocumentsList";
import Dashboard from "../../../CommonComponents/OwlCarousel/Overview"


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../../../assets/css/studentdashboard.less"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            show: false,
            setDate: "",
            date: ""
        };
    }
    handleShow(e) {
        e.preventDefault()
        this.setState({ show: true })
    }
    setShow(isshow) {
        console.log(isshow)
        this.setState({ show: isshow })
    }
    CircleAddCtaAction() {
        console.log("click Circle Add Cta btn")
    }
    render() {
        const OwlCarouselData = [
            {
                'AdvisorsImage': Avatar2,
                'Description': 'Total Earned',
                'Count': '$2.7k'
            },
            {
                'AdvisorsImage': Avatar2,
                'Description': 'Connected Students',
                'Count': '24'
            },
            {
                'AdvisorsImage': Avatar2,
                'Description': 'Pending connections',
                'Count': '347'
            }
        ];

        const ModalPopupData = [
            {
                'popuptitle': 'Modal Title here..',
                'popupbodycontent': 'Modal body content here...',
            }
        ];

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

        const WorkspaceData = [
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon',
                'WorkspaceTitle': "Joshua Ashiru",
                'WorkspaceRating': "3"
            },
            {
                'AvatarIcon': Avatar2,
                'AvatarIconAlt': 'Avatar2-icon',
                'WorkspaceTitle': "Joshua Ashiru",
                'WorkspaceRating': "4"
            },
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon',
                'WorkspaceTitle': "Joshua Ashiru",
                'WorkspaceRating': "4"
            },
            {
                'AvatarIcon': Avatar2,
                'AvatarIconAlt': 'Avatar2-icon',
                'WorkspaceTitle': "Joshua Ashiru",
                'WorkspaceRating': "4"
            },
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon',
                'WorkspaceTitle': "Joshua Ashiru",
                'WorkspaceRating': "4"
            },
            {
                'AvatarIcon': Avatar2,
                'AvatarIconAlt': 'Avatar2-icon',
                'WorkspaceTitle': "Joshua Ashiru",
                'WorkspaceRating': "4"
            }
        ];

        const RecommendedFriendsData = [
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon',
                'RecommendedFriendsTitle': "Joshua Ashiru",
                'RecommendedFriendsSubTitle': "Went to same school as you"
            },
            {
                'AvatarIcon': Avatar2,
                'AvatarIconAlt': 'Avatar2-icon',
                'RecommendedFriendsTitle': "Joshua Ashiru",
                'RecommendedFriendsSubTitle': "Went to same school as you"
            },
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon',
                'RecommendedFriendsTitle': "Joshua Ashiru",
                'RecommendedFriendsSubTitle': "Went to same school as you"
            },
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon',
                'RecommendedFriendsTitle': "Joshua Ashiru",
                'RecommendedFriendsSubTitle': "Went to same school as you"
            },
            {
                'AvatarIcon': Avatar2,
                'AvatarIconAlt': 'Avatar2-icon',
                'RecommendedFriendsTitle': "Joshua Ashiru",
                'RecommendedFriendsSubTitle': "Went to same school as you"
            },
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon',
                'RecommendedFriendsTitle': "Joshua Ashiru",
                'RecommendedFriendsSubTitle': "Went to same school as you"
            }
        ];

        const DocumentsListData = [
            {
                'DocumentName': "Cambridge.doc",
                'DocumentExtension': 'doc',
                'DocumentDate': "1 October, 2021",
                'DocumentTime': "12:38"
            },
            {
                'DocumentName': "Cambridge.doc",
                'DocumentExtension': 'doc',
                'DocumentDate': "1 October, 2021",
                'DocumentTime': "12:38"
            },
            {
                'DocumentName': "Cambridge.zip",
                'DocumentExtension': 'zip',
                'DocumentDate': "1 October, 2021",
                'DocumentTime': "12:38"
            }
        ];

        const DocumentsModalPopupData = [
            {
                'popuptitle': 'All documents',
                'popupbodycontent': 'Modal body content here...',
                'DocumentsModalData': [
                    {
                        'DocumentName': "Cambridge.zip",
                        'DocumentExtension': 'zip',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.doc",
                        'DocumentExtension': 'doc',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    },
                    {
                        'DocumentName': "Cambridge.zip",
                        'DocumentExtension': 'zip',
                        'DocumentDate': "1 October, 2021",
                        'DocumentTime': "12:38",
                        'LastUpdated': '13 hours ago',
                        'Description': 'This is the document you should use for the ',
                        'fileSize': '2.3 MB'
                    }
                ]
            }
        ];

        //const values = [true, 'sm', 'md', 'lg', 'xl'];
        return (
            <>
                <Layouts />
                <div className="Templates main-content">
                    <div className="row m-0">
                        <div className="col-sm-8 p-0 mt-5">
                            <div className="row m-0 mb-4">
                                <div className="col-sm-12 p-0">
                                    <div className="main-content__center">
                                        <div className="SelectAdvisors__list" style={{minHeight: '225px'}}>
                                            <Dashboard
                                                OwlCarouselData={OwlCarouselData}
                                                Carouselitems={3}
                                                islooping={true}
                                                dots={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row m-0 mb-4">
                                <div className="col-sm-8 ps-10 main-content__center">
                                    <div className="row pl-5">
                                        <div className="row">
                                            <div className="col-sm-12 ps-0">
                                                <div className="ms-4 p-0" style={{fontSize: "20px", fontWeight: "700"}}>Workspace
                                                <span className="pull-right text-decoration-underline"><a href="#" style={{fontSize: "18px", fontWeight: "500"}}>See All</a> </span>
                                                
                                                </div>
                                                <span className="ms-4"> You have 24 Students. </span>
                                            </div>
                                        </div>
                                        <div className="row mt-5 p-4">
                                            <div className="col-sm-4">
                                                <div className="card border-2 rounded-1 mb-0">
                                                    <div className="card-body text-left">
                                                        <div className="avatar box-shadow-2 mb-0">
                                                            <img src={ Avatar2 } rounded />
                                                            <span className="pull-right">....</span>
                                                        </div>
                                                        <h5 className="mt-3 mb-5 p-0">Going to Cambridge</h5>
                                                        <span className="mt-5"> Phase: 2021, (2 - semestre) </span>
                                                        <br></br>
                                                        <span className="mt-5"> Course: Economy </span>
                                                        <br></br>
                                                        <span className="mt-5 mb-5"> Milestone: Milestone 1 </span>
                                                        <br></br>
                                                        <hr className="mt-5"></hr>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="card card-profile-1 border-1 mb-0">
                                                    <div className="card-body text-left">
                                                        <div className="avatar box-shadow-2 mb-0">
                                                            <img src={ Avatar1 } rounded />
                                                            <span className="pull-right">....</span>
                                                        </div>
                                                        <h5 className="mt-3 mb-5 p-0">Become an Engineer</h5>
                                                        <span className="mt-5"> Phase: 2021, (2 - semestre) </span>
                                                        <br></br>
                                                        <span className="mt-5"> Course: Economy </span>
                                                        <br></br>
                                                        <span className="mt-5 mb-5"> Milestone: Milestone 1 </span>
                                                        <br></br>
                                                        <hr className="mt-5"></hr>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="card card-profile-1 border-1 mb-0">
                                                    <div className="card-body text-left">
                                                        <div className="avatar box-shadow-2 mb-0">
                                                            <img src={ Avatar2 } rounded />
                                                            <span className="pull-right">....</span>
                                                        </div>
                                                        <h5 className="mt-3 mb-5 p-0">Going to Cambridge</h5>
                                                        <span className="mt-5"> Phase: 2021, (2 - semestre) </span>
                                                        <br></br>
                                                        <span className="mt-5"> Course: Economy </span>
                                                        <br></br>
                                                        <span className="mt-5 mb-5"> Milestone: Milestone 1 </span>
                                                        <br></br>
                                                        <hr className="mt-5"></hr>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 pe-0">
                                    <div className="RecommendedFriends mb-4">
                                        <RecommendedFriends
                                            RecommendedFriendsTitle={'Recommended Students'}
                                            RecommendedFriendsSubTitle={''}
                                            RecommendedFriendsData={RecommendedFriendsData}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 pe-0">
                            <div className="Schedule_calendar">
                                <Calendar onChange={this.setDate} value={this.date}  />
                            </div>
                            <div className="Upcoming_Sessions">
                                <h2>Upcoming Sessions</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;