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
    CircleAddCtaAction(e) {
        e.preventDefault()
        this.props.CircleAddCtaAction()
    }
    render() { 
        
        let { CircleAddCtaData } = this.props;
        
        return (
            <>      
                {CircleAddCtaData && 
                    <a href="" className="" onClick={(e) => this.CircleAddCtaAction(e)}>
                        <div className="CircleAddCta">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1.03613V13.0897M13 7.06293L1 7.06293" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </a>
                    
                }
                
            </>
        )
    }
}
export default Index;