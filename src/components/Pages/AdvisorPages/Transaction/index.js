import React, { Component } from "react";
import Layouts from "../../../Common/Layouts"
import "../../../../assets/css/transaction.less";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../../../assets/css/common.less";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Chart from "./Chart"
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Avatar1 from "../../../../assets/images/icons/Avatar1.png"
import Avatar2 from "../../../../assets/images/icons/Avatar2.png"
import TwoUserIcons from "../../../CommonComponents/TwoUserIcons";
import { Button, Dropdown, ButtonGroup } from "react-bootstrap";
// import { Chart } from "react-google-charts";
import Table from './Table'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        // const data = [
        //     ["Year", "Sales", "Expenses"],
        //     ["01", 1000, 400],
        //     ["05", 1170, 460],
        //     ["10", 660, 1120],
        //     ["15", 1030, 540],
        //     ["20", 660, 1120],
        //     ["25", 1030, 540],
        //   ];

        const AvatarIconData = [
            {
                'AvatarIcon': Avatar2,
                'AvatarIconAlt': 'Avatar2-icon'
            }
        ];
        const AvatarIcon = [
            {
                'AvatarIcon': Avatar1,
                'AvatarIconAlt': 'Avatar2-icon'
            }
        ];
        return (
            <>
                <Layouts />
                <div className="Templates main-content">
                    <div className="row m-0">
                        <div className="col-lg-9 col-md-8 col-sm-8 col-12 p-0">
                            <div className="row m-0 mb-4">
                                <div className="col-sm-12 p-0 bread_Trans">
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="/advisor/dashboard">Dashboard</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Transaction list</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 ">
                                    <h1 className="trans_title">Transactions List</h1>
                                </div>
                                <div className="col-sm-12 col-md-12 ">
                                    <p className="bread_Trans">Here you can check all of your transaction's</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 trans_chart">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 pt-2"><b>Earnings</b></div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <Tabs defaultActiveKey="table" id="uncontrolled-tab-example" className="mb-3">
                                                <Tab eventKey="table" title="Table">
                                                    <Chart />

                                                    {/* <Chart
                                                        chartType="Bar"
                                                        width="150%"
                                                        height="100%"
                                                        data={data}
                                                        // options={options}
                                                    /> */}
                                                </Tab>
                                                <Tab eventKey="chart" title="Chart">
                                                </Tab>
                                            </Tabs>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 pt-2">Compare to last</div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 pt-2">
                                            <select className="sel-tran">
                                                <option>Month</option>
                                            </select>
                                            {/* <Dropdown className="drop-trans">
                                                <Button variant="secondary">Month</Button>
                                                <Dropdown.Toggle variant="secondary" />
                                            </Dropdown> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-12 col-md-12 trans_chart">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 pt-2"><b>Transactions List</b></div>
                                        <div className="col-lg-3 col-md-6 pt-2"></div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 pt-2">
                                        <select className="sel-tran">
                                                <option>Last Month</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 pt-2">
                                            {/* <Table /> */}

                                            <table class="table table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td><TwoUserIcons
                                                            AvatarIconData={AvatarIconData}
                                                        />
                                                        </td>
                                                        <td>Cora Bailey</td>
                                                        <td>55$</td>
                                                        <td>Millestone</td>
                                                        <td>03/01/2021</td>
                                                        <td>06/10/2022</td>
                                                        <td><Button variant="success" className="trans-ta">Accepted</Button></td>
                                                    </tr>

                                                    <tr>
                                                        <td> <TwoUserIcons
                                                            AvatarIconData={AvatarIcon}
                                                        /></td>
                                                        <td>Shaun White</td>
                                                        <td>221$</td>
                                                        <td>Course</td>
                                                        <td>03/01/2021</td>
                                                        <td>06/10/2022</td>
                                                        <td><Button variant="danger" className="trans-td">Declined</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <TwoUserIcons
                                                            AvatarIconData={AvatarIcon}
                                                        /></td>
                                                        <td>John Seel</td>
                                                        <td>120$</td>
                                                        <td>plan</td>
                                                        <td>03/01/2021</td>
                                                        <td>06/10/2022</td>
                                                        <td><Button variant="success" className="trans-ta">Accepted</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <TwoUserIcons
                                                            AvatarIconData={AvatarIconData}
                                                        /></td>
                                                        <td>Cora Bailey</td>
                                                        <td>55$</td>
                                                        <td>Millestone</td>
                                                        <td>03/01/2021</td>
                                                        <td>06/10/2022</td>
                                                        <td><Button variant="success" className="trans-ta">Accepted</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>  <TwoUserIcons
                                                            AvatarIconData={AvatarIcon}
                                                        /></td>
                                                        <td>Shaun White</td>
                                                        <td>221$</td>
                                                        <td>Course</td>
                                                        <td>03/01/2021</td>
                                                        <td>06/10/2022</td>
                                                        <td><Button variant="danger" className="trans-td">Declined</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <TwoUserIcons
                                                            AvatarIconData={AvatarIcon}
                                                        /></td>
                                                        <td>John Seel</td>
                                                        <td>120$</td>
                                                        <td>plan</td>
                                                        <td>03/01/2021</td>
                                                        <td>06/10/2022</td>
                                                        <td><Button variant="success" className="trans-ta">Accepted</Button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-4 col-12 pe-0">
                            <div className="Schedule_calendar">
                                <Calendar onChange={this.setDate} value={this.date} />
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