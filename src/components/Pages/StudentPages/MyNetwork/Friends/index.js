import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import Explore from "../Explore"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExplore: false,
            isFriends: true
        }
    }

    handleShow(e) {
        e.preventDefault()
        this.setState({ isExplore: true, isFriends: false })
        this.props.showFriendNetwork(e, false)
    }
    handleBack(e) {
        e.preventDefault();
        this.setState({ isExplore: false, isFriends: true })
        this.props.showFriendNetwork(e, true)
    }
    render() {
        let { isExplore, isFriends } = this.state
        return (
            <>
                {isFriends &&
                    <div className="advisor advcnt">
                        <h5>My Friends<button className="btn model-content__cta cta--button">Add new Friends</button>

                        </h5>
                        <div className="advisorcontent">
                            <h6 className="model-content__sub-title">You do not have any Friends yet. Do you want to
                                <u className="model-content__undeline-title" >
                                    <span onClick={(e) => this.handleShow(e)}>
                                        Explore them
                                    </span>

                                </u> ?
                            </h6>
                        </div>
                    </div>
                }
                {isExplore &&
                    <div className="e">
                        <Explore
                            title="Friends"
                            handleBack={(e) => this.handleBack(e)}
                        />
                    </div>
                }
            </>
        );
    }
}
export default Index;