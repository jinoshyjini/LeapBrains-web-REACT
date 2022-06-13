import React, { Component } from "react";
import CircleUserAddCta from "../CircleUserAddCta";
import Rating from "../Rating";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }
    componentWillMount() {
        
    }
    CircleUserAddCtaAction(){
        console.log("click Circle Add user Cta btn")
    }
    render() { 
        let { GetAdvisorsData, GetAdvisorsTitle, GetAdvisorsSubTitle } = this.props;
        
        var GetAdvisorsDataList = GetAdvisorsData  && GetAdvisorsData.map((element,key) => {    
            return (
                <div className="GetAdvisors__List__items">
                    <div className="row m-0">
                        <div className="col-1 p-0 ">
                            <div className="Avatar-icon">
                                <img src={element.AvatarIcon} alt={element.AvatarIconAlt} />
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="">
                                <h2 className="GetAdvisors__List__items__title">{element.GetAdvisorsTitle}</h2>
                                <div className="GetAdvisors__List__items__rating">
                                    <Rating
                                        isRating={true}
                                        RatingValue={element.GetAdvisorsRating}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-2 text-end">
                            <CircleUserAddCta
                                CircleUserAddCtaData={true}
                                CircleUserAddCtaAction={this.CircleUserAddCtaAction}
                            />
                        </div>
                    </div>
                </div>
            )      
        });

        return (
            <>      
                {GetAdvisorsData && GetAdvisorsData.length > 0 &&
                    
                    <div className="GetAdvisors">
                        <h2 className="GetAdvisors__title">{GetAdvisorsTitle}</h2>
                        <p className="GetAdvisors__sub-title">{GetAdvisorsSubTitle}</p>
                        
                        <div className="GetAdvisors__List">
                            {GetAdvisorsDataList}
                        </div>
                    </div>
                }
                
            </>
        )
    }
}
export default Index;