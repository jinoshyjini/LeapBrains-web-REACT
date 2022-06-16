import React, { Component } from "react";
import Layouts from "../../../Layout/Sidebar"

import Tab from "react-bootstrap/Tab";
import "../../../../assets/css/network.less"
import { Col, Row, Form } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Advisor from "./Advisor";
import Friend from "./Friends";



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "Advisors",
            isShowNetwork: true,
        };
    }

    setKey = (k) => {
        this.setState({
            key: k,

        });
    }
    showMyNetwork(e,isvalue) {
        e.preventDefault()
        this.setState({ isShowNetwork: isvalue })
       
    }


    render() {
        let { isShowNetwork } = this.state
        return (
            <>
                <Layouts />
                <div className="Templates bg-temp">
                    <div className="model-content">
                            <div >
                                {isShowNetwork &&<h5>
                                    My Network
                                </h5>}
                                <Tab.Container id="left-tabs-example" activeKey={this.state.key}
                                    onSelect={(k) => this.setKey(k)}>
                                    <Row>
                                        {isShowNetwork &&<Col sm={12}>
                                            <Nav variant="pills" >
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Advisors">Advisors</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="Friends">Friends</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>}
                                        <Col sm={12}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="Advisors">
                                                    <Advisor
                                                        showMyNetwork={(e,isvalue) => this.showMyNetwork(e,isvalue)}
                                                       
                                                    />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="Friends">
                                                    <Friend 
                                                     showFriendNetwork={(e,isvalue) => this.showMyNetwork(e,isvalue)}/>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </div>

                    </div>

                </div>


            </>
        );
    }
}

export default Index;