import React, { Component } from "react";
import SelectAdvisors from "../../../../CommonComponents/OwlCarousel"
import Search from "../../../../CommonComponents/Search";



class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    handleBack(e) {
        e.preventDefault();
        this.props.handleBack(e);
    }


    render() {
        const OwlCarouselData = [
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
        let {
            title
        } = this.props
        return (
            <>
                <div className="row">
                    <div className="col-6">
                        <h5>
                            <span onClick={(e) => this.handleBack(e)} >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 8.00065C13.3333 7.63246 13.0348 7.33398 12.6666 7.33398H3.33325C2.96506 7.33398 2.66659 7.63246 2.66659 8.00065C2.66659 8.36884 2.96506 8.66732 3.33325 8.66732H12.6666C13.0348 8.66732 13.3333 8.36884 13.3333 8.00065Z" fill="#1B1C1E" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47149 2.86128C8.21114 2.60093 7.78903 2.60093 7.52868 2.86128L2.86201 7.52794C2.60166 7.78829 2.60166 8.2104 2.86201 8.47075L7.52868 13.1374C7.78903 13.3978 8.21114 13.3978 8.47149 13.1374C8.73184 12.8771 8.73184 12.455 8.47149 12.1946L4.27622 7.99935L8.47149 3.80409C8.73184 3.54374 8.73184 3.12163 8.47149 2.86128Z" fill="#1B1C1E" />
                                </svg>
                            </span>
                            Explore {title}
                        </h5>
                    </div>
                    <div className="col-6 p-3">

                        <Search />

                    </div>
                </div>
                <div >
                    <h5>Featured </h5>
                    <div className="mt-0">
                        <SelectAdvisors
                            OwlCarouselData={OwlCarouselData}
                            Carouselitems={4}
                            islooping={true}
                        />
                    </div>
                </div>
                <div >
                    <h5>With same interests </h5>
                    <div className="mt-0">
                        <SelectAdvisors
                            OwlCarouselData={OwlCarouselData}
                            Carouselitems={4}
                            islooping={true}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Index;