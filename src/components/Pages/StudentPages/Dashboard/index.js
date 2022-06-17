import React, { Component } from "react";
import Layouts from "../../../Common/Layouts"
import ModalPopup from "../../../CommonComponents/ModalPopup"
import "../../../../assets/css/common.less";
import Avatar1 from "../../../../assets/images/icons/Avatar1.png"
import Avatar2 from "../../../../assets/images/icons/Avatar2.png"

import TwoUserIcons from "../../../CommonComponents/TwoUserIcons";
import CircleAddCta from "../../../CommonComponents/CircleAddCta";
import GetAdvisors from "../../../CommonComponents/GetAdvisors";
import RecommendedFriends from "../../../CommonComponents/RecommendedFriends";
import DocumentsList from "../../../CommonComponents/DocumentsList";
import Chatbox from "../../../CommonComponents/ChatBox";

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

        const GetAdvisorsData = [
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon',
                'GetAdvisorsTitle': "Joshua Ashiru",
                'GetAdvisorsRating': "3"
            },
            {
                'AvatarIcon': Avatar2,
                'AvatarIconAlt': 'Avatar2-icon',
                'GetAdvisorsTitle': "Joshua Ashiru",
                'GetAdvisorsRating': "4"
            },
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon',
                'GetAdvisorsTitle': "Joshua Ashiru",
                'GetAdvisorsRating': "4"
            },
            {
                'AvatarIcon': Avatar2,
                'AvatarIconAlt': 'Avatar2-icon',
                'GetAdvisorsTitle': "Joshua Ashiru",
                'GetAdvisorsRating': "4"
            },
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar1-icon',
                'GetAdvisorsTitle': "Joshua Ashiru",
                'GetAdvisorsRating': "4"
            },
            {
                'AvatarIcon': Avatar2,
                'AvatarIconAlt': 'Avatar2-icon',
                'GetAdvisorsTitle': "Joshua Ashiru",
                'GetAdvisorsRating': "4"
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
                        <div className="col-lg-9 col-md-8 col-sm-8 col-12 p-0">
                            <div className="row m-0 mb-4">
                                <div className="col-sm-12 p-0">
                                    <div className="main-content__center">
                                        <h5>Goals <a href="javascript:void(0)" onClick={(e) => this.handleShow(e)} className="main-content__cta cta--underline">See all</a>
                                            {this.state.show &&
                                                <ModalPopup
                                                    size="lg"
                                                    dialogClassName=""
                                                    fullscreen={true}
                                                    centered={false}
                                                    show={this.state.show}
                                                    ModalPopupData={ModalPopupData}
                                                    onsetShow={(isshow) => this.setShow(isshow)}
                                                />
                                            }
                                        </h5>
                                        <div className="contents">
                                            <div className="row m-0">
                                                <div className="col-6 col-sm-3 col-md-2 p-0 order-0">
                                                    <div className="Two-Avatar-icon">
                                                        <TwoUserIcons
                                                            AvatarIconData={AvatarIconData}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-7 col-md-8 ps-0 order-2">
                                                    <div className="contents__text">
                                                        <h2 className="contents__text__title">Joshua Ashiru</h2>
                                                        <p className="contents__text__sub-title">2021-2022</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-sm-2 col-md-2 text-end order-1">
                                                    <CircleAddCta
                                                        CircleAddCtaData={true}
                                                        CircleAddCtaAction={this.CircleAddCtaAction}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row m-0 mb-4">
                                <div className="col-sm-8 ps-0">
                                    <GetAdvisors
                                        GetAdvisorsTitle={'Need help in creating a plan?'}
                                        GetAdvisorsSubTitle={'Get an advisor to create it for you!'}
                                        GetAdvisorsData={GetAdvisorsData}
                                    />
                                </div>
                                <div className="col-sm-4 pe-0">
                                    <div className="RecommendedFriends mb-4">
                                        <RecommendedFriends
                                            RecommendedFriendsTitle={'Recommended Friends'}
                                            RecommendedFriendsSubTitle={''}
                                            RecommendedFriendsData={RecommendedFriendsData}
                                        />
                                    </div>

                                    <div className="DocumentsList mb-4">
                                        <DocumentsList
                                            DocumentsListTitle={'Documents'}
                                            DocumentsListSubTitle={''}
                                            DocumentsListData={DocumentsListData}
                                            DocumentsModalPopupData={DocumentsModalPopupData}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-12 pe-0">
                            <div className="Schedule_calendar">
                                <Calendar onChange={this.setDate} value={this.date}  />
                            </div>
                            <div className="Upcoming_Sessions">
                                <h2>Upcoming Sessions</h2>
                            </div>
                        </div>
                    </div>
                    <Chatbox />
                </div>
                
            </>
        );
    }
}

export default Index;