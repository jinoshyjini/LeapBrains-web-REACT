import React, { Component } from "react";
import avator from '../../../../../assets/images/icons/Avatar1.png'
import "../../../../../assets/css/notification.less"



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        return (
            <><div className='row'>
                <div className="col-md-7 col-sm-12 col-12">
                <div className="container-changes">
                    
                    <div className="active"></div>
                   
                        <div className='profile'>
                        <img src={avator} alt='img'/>
                        </div>
                        <div className='change-box'>
                            <div className='top'>
                                <div className='name'>Stevan Sanders</div>
                                <div className='time-min'>37m</div>
                            </div>
                            <div className='message'>
                                Hi, let me know when you go to library.
                            </div>
                            <div class="row m-0">
                            <div class="col-2 p-0 ">
                                <div class="zip DocumentsList__List__items__Extension">zip</div>
                            </div>  
                         <div class="col-10">
                            <div class="">
                                <h2 class="DocumentsList__List__items__title">Cambridge.zip</h2>
                                <p class="DocumentsList__List__items__sub-title_date">1 MB </p>
                            </div>
                          </div>
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