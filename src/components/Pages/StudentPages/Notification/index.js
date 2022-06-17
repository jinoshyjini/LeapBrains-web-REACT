import React, { Component } from "react";
import Layouts from "../../../Layout/Sidebar";
import '../../../../assets/css/notification.less';
import Search from "../../../CommonComponents/Search";
import { Tabs, Tab } from 'react-bootstrap'
import General from './General/index';
import Change from './Change/index';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodata: true,
            key: "general",
        };
    }
    setKey = (k) => {
        this.setState({
            key: k,
        });
    }

    render() {

        return (
            <>
                <Layouts />
                <div className="Templates">
                    <div className="model-content">
                        <div className='notification'>
                            <div className='notify-head row'>
                                <div className='notify-head-right col-md-9 '>
                                    <div className="title">Notifications</div>
                                    <div className=''>
                                        {/* <Search className='e' /> */}
                                    </div>
                                </div>
                                {/* <div className='col-md-3'><a href='' className='link'>Mark all as read</a></div> */}
                            </div>
                            <div className="container-notify row">
                                <div className="container">
                                    <Tab.Container defaultActiveKey="plans">
                                        <Tabs
                                            id="controlled-tab-example"
                                            activeKey={this.state.key}
                                            onSelect={(k) => this.setKey(k)}
                                            className="mb-3"
                                        >
                                            <Tab eventKey="general" title="General">
                                                <General />
                                            </Tab>
                                            <Tab eventKey="change" title="Changes">
                                                <Change />
                                            </Tab>

                                        </Tabs>
                                    </Tab.Container>
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