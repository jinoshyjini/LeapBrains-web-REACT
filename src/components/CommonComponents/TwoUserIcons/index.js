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
    render() { 
        
        let { AvatarIconData } = this.props;
        
        var AvatarIconList = AvatarIconData && AvatarIconData.length > 0 && AvatarIconData.map((element,key) => {    
            return (
                <img src={element.AvatarIcon} alt={element.AvatarIconAlt} />
            )      
        });

        return (
            <>      
                {AvatarIconData && AvatarIconData.length > 0 &&
                    <div className="TwoUserIcons">
                        {AvatarIconList}
                    </div>
                }
                
            </>
        )
    }
}
export default Index;