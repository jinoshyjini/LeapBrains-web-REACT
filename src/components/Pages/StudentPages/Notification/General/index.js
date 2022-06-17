import React, { Component } from "react";
import "../../../../../assets/css/notification.less"




class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {

        return (
            <>
                <div className="container-general">
                <div className='notify-box'>
                            <span className='sorry'>Sorry !</span>
                            <span className='msg'>You do not have any notifications at the moment.</span>
                        </div>
                </div>
            </>
        );
    }
}

export default Index;