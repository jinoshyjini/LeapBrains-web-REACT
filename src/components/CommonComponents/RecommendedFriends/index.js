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
        let { RecommendedFriendsData, RecommendedFriendsTitle, RecommendedFriendsSubTitle } = this.props;
        
        var RecommendedFriendsDataList = RecommendedFriendsData  && RecommendedFriendsData.map((element,key) => {    
            return (
                <div className="RecommendedFriends__List__items">
                    <div className="row m-0">
                        <div className="col-2 p-0 ">
                            <div className="Avatar-icon">
                                <img src={element.AvatarIcon} alt={element.AvatarIconAlt} />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="">
                                <h2 className="RecommendedFriends__List__items__title">{element.RecommendedFriendsTitle}</h2>
                                <p className="RecommendedFriends__List__items__sub-title">{element.RecommendedFriendsSubTitle}</p>
                            </div>
                        </div>
                        <div className="col-2 p-0 text-end">
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
                {RecommendedFriendsData && RecommendedFriendsData.length > 0 &&
                    
                    <div>
                        <h2 className="GetAdvisors__title">{RecommendedFriendsTitle}</h2>
                        <p className="GetAdvisors__sub-title">{RecommendedFriendsSubTitle}</p>
                        
                        <div className="GetAdvisors__List">
                            {RecommendedFriendsDataList}
                        </div>
                    </div>
                }
                
            </>
        )
    }
}
export default Index;