import React, { Component } from "react";
import AddNewCards from "../AddCards"
import Explore from "../Explore"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExplore: false,
            isAdvisor: true
        }
        this.handleShow = this.handleShow.bind(this)
    }

    handleShow(e) {
        e.preventDefault()
        this.setState({ isExplore: true, isAdvisor: false })
        this.props.showMyNetwork(e, false)
    }
    handleBack(e) {
        e.preventDefault();
        this.setState({ isExplore: false, isAdvisor: true })
        this.props.showMyNetwork(e, true)
    }

    render() {
        const AddNewData = [
            {
                'id': 1,
                'Description': '',
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'Session': '$12/session',
                'Rating': '4.7/5.0',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'id': 2,
                'Description': '',
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'Session': '$11/session',
                'Rating': '4.7/5.0',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'Description': '',
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'Session': '$10/session',
                'Rating': '4.7/5.0',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'Description': '',
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'Session': '$12/session',
                'Rating': '4.5/5.0',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'Description': '',
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'Session': '$12/session',
                'Rating': '4.7/5.0',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'Description': '',
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'Session': '$12/session',
                'Rating': '4.7/5.0',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'Description': '',
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'Session': '$12/session',
                'Rating': '4.7/5.0',
                'AdvisorsName': 'Nikolay Foster',
                'Location': '',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
        ];
        let { isExplore, isAdvisor } = this.state
        return (
            <>
                {isAdvisor &&
                    <div className="advisor">
                        <h5>My Advisors<button className="btn model-content__cta cta--button">Add new Advisors</button>

                        </h5>
                        {AddNewData && AddNewData.length > 0 ?
                            <AddNewCards
                                AddNewData={AddNewData}
                            /> :
                            <div className="advisorcontent">
                                <h6 className="model-content__sub-title">You do not have any advisors yet. Do you want to
                                    <u className="model-content__undeline-title" >
                                        <span onClick={(e) => this.handleShow(e)}>
                                            Explore them
                                        </span>

                                    </u> ?
                                </h6>
                            </div> 
                        }
                    </div>

                } 
                
                {isExplore &&
                    <div className="e">
                        <Explore
                            title="Advisors"
                            handleBack={(e) => this.handleBack(e)}
                        />
                    </div>
                }
            </>
        );
    }
}
export default Index;