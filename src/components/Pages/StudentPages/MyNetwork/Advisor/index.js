import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
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
        let { isExplore, isAdvisor } = this.state
        return (
            <>
                {isAdvisor &&
                    <div className="advisor">
                        <h5>My Advisors<button className="btn model-content__cta cta--button">Add new Advisors</button>

                        </h5>
                        <div className="advisorcontent">
                            <h6 className="model-content__sub-title">You do not have any advisors yet. Do you want to
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