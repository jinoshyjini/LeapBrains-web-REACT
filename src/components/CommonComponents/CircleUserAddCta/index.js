import React, { Component } from "react";
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }
    componentWillMount() {
    }
    CircleUserAddCtaAction(e) {
        e.preventDefault()
        this.props.CircleUserAddCtaAction()
    }
    render() { 
        
        let { CircleUserAddCtaData } = this.props;
        
        return (
            <>      
                {CircleUserAddCtaData && 
                    <a href="" className="" onClick={(e) => this.CircleUserAddCtaAction(e)}>
                        <div className="CircleUserAddCta">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0H0V16H16V0Z" fill="#3F51B5"/>
                            <path d="M12.5 8.5H15.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 7V10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.75 10C8.82107 10 10.5 8.32107 10.5 6.25C10.5 4.17893 8.82107 2.5 6.75 2.5C4.67893 2.5 3 4.17893 3 6.25C3 8.32107 4.67893 10 6.75 10Z" fill="#3F51B5" stroke="white" strokeMiterlimit="10"/>
                            <path d="M1.38794 12.4999C2.04502 11.717 2.86556 11.0875 3.7919 10.6557C4.71823 10.2238 5.7279 10 6.74997 10C7.77203 10 8.7817 10.2238 9.70803 10.6557C10.6344 11.0876 11.4549 11.7171 12.112 12.4999" fill="#3F51B5"/>
                            <path d="M1.38794 12.4999C2.04502 11.717 2.86556 11.0875 3.7919 10.6557C4.71823 10.2238 5.7279 10 6.74997 10C7.77203 10 8.7817 10.2238 9.70803 10.6557C10.6344 11.0876 11.4549 11.7171 12.112 12.4999" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </a>
                    
                }
                
            </>
        )
    }
}
export default Index;