import React, { Component } from "react";
import { Link } from "react-router-dom";
import SelectAdvisors from "../../../CommonComponents/OwlCarousel"
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }
    
    render() { 
        const OwlCarouselData = [
            {
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'AdvisorsName': 'Nikolay Foster',
                'Location': '',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
        ];
        return (
            <>
                <div className="login vertical-center">
                    <div className="vertical-center">
                        <div className="container">
                            <div className="Templates_2">
                                <h1 className="login_title text-center">Suggested students <span className="bluetext">with the same goals</span></h1>
                                <div className="SelectAdvisors__list">
                                    <SelectAdvisors
                                        OwlCarouselData={OwlCarouselData}
                                        Carouselitems={4}
                                        islooping={true}
                                    />
                                </div>
                                <p className="pull-right"><Link to="/Dashboard" className="cta--rounded next">Go to dashboard</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Index;