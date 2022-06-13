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
        let { RatingValue, isRating } = this.props;

        const Ratingitems = [];
        for (var i=1; i <= 5; i++) {
            Ratingitems.push(
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_13_14303)">
                    <path d="M11.0673 4.27371C11.161 4.56607 11.0843 4.881 10.867 5.09558L8.96704 6.97182C8.92975 7.00868 8.91273 7.06175 8.92152 7.11377L9.37004 9.76309C9.42135 10.066 9.30072 10.3665 9.05523 10.5472C8.91655 10.6494 8.75422 10.7013 8.59086 10.7013C8.46508 10.7013 8.33868 10.6705 8.22186 10.6083L5.87338 9.35749C5.82723 9.33291 5.77218 9.33291 5.72605 9.35749L3.37759 10.6083C3.10904 10.7513 2.78964 10.728 2.54415 10.5473C2.29867 10.3666 2.17806 10.0661 2.22934 9.76311L2.67786 7.11379C2.68668 7.06177 2.66964 7.0087 2.63235 6.97185L0.732388 5.09558C0.515075 4.881 0.438341 4.56607 0.532138 4.27371C0.625935 3.98134 0.870692 3.77227 1.17097 3.72808L3.79663 3.34157C3.84819 3.33397 3.89272 3.30118 3.91581 3.25386L5.09005 0.843404C5.22433 0.56773 5.49625 0.396484 5.79969 0.396484C6.10314 0.396484 6.37506 0.56773 6.50933 0.843404L7.68358 3.25383C7.70664 3.30118 7.75119 3.33397 7.80273 3.34154L10.4284 3.72808C10.7287 3.77227 10.9735 3.98134 11.0673 4.27371Z" 
                    fill={i <= RatingValue ? "#E64A19" : "" }
                    stroke={i <= RatingValue ? "" : "#99A2AA" } 
                    strokeWidth={i <= RatingValue ? "" : "1.5" } 
                    />
                    </g>
                    <defs>
                    <clipPath id="clip0_13_14303">
                    <rect width="10.8" height="11" fill="white" transform="translate(0.400024)"/>
                    </clipPath>
                    </defs>
                </svg>
            )
        }
        
        return (
            <>      
                {isRating &&
                    <div className="rating">
                        {Ratingitems}
                    </div>
                }
                
            </>
        )
    }
}
export default Index;