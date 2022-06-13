import React, { Component } from "react";
import { Link } from "react-router-dom";
import SelectAdvisors from "../../../../CommonComponents/OwlCarousel"
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
                'Description': 'Went to same school as you Have the same inerests',
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'Session': '$12/session',
                'Rating': '4.7/5.0',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'Description': 'Have the same interests',
                'AdvisorsImage': 'http://via.placeholder.com/70x72',
                'Session': '$11/session',
                'Rating': '4.7/5.0',
                'AdvisorsName': 'Nikolay Foster',
                'Location': 'USA, Cambridge',
                'University': 'Harvard University',
                'tags': ['Economy', 'Management', 'Marketing', 'History', 'Maths']
            },
            {
                'Description': 'Studying at Cambridge',
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
        return (
            <>
                <div className="login vertical-center">
                    <div className="vertical-center">
                        <div className="container">
                            <div className="Templates_2">
                                <h1 className="login_title text-center">Suggested advisors <span className="bluetext">based on your goals</span></h1>
                                <div className="SelectAdvisors__list">
                                    <SelectAdvisors
                                        OwlCarouselData={OwlCarouselData}
                                        Carouselitems={4}
                                        islooping={true}
                                    />
                                </div>
                                <p className="pull-right"><Link to="/SelectFriend" className="cta--rounded next">Next</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Index;