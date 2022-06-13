import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
        const options = {
            items: this.props.Carouselitems ? this.props.Carouselitems : 4,
            nav: false,
            //navText:["<div className='nav-btn prev-slide'>prev</div>","<div className='nav-btn next-slide'>next</div>"],
            autoplay: false,
            slideBy: 1,
            dots: false,
            dotsEach: false,
            dotData: true,
            loop: true,
            // loop: this.props.islooping ? this.props.islooping : false,
        };
        let { OwlCarouselData } = this.props;
        
        var OwlCarouselList = OwlCarouselData && OwlCarouselData.length > 0 && OwlCarouselData.map((element,key) => {    
            return (
                <div>
                    <div className='owl__item'>
                        <div className="owl__item__lists" style={{minHeight: '60px', marginLeft: '20px', marginRight: '20px'}}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="owl__item__lists__icon">
                                        <img src={element.AdvisorsImage} alt="images"  />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="owl__item__lists__location">
                                        {element.Description && <p>
                                            <span>{element.Description}</span>
                                        </p> }
                                        <h1 className="" style={{
                                            fontStyle: "normal",
                                            fontWeight: "700",
                                            fontSize: "49px",
                                            lineHeight: "50px"}}>{element.Count}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )      
        });

        return (
            <>      
                {OwlCarouselData && OwlCarouselData.length > 0 &&
                    <OwlCarousel className='owl owl-OwlCarousel owl-theme' ref="gallery" {...options}>
                        {OwlCarouselList}                        
                    </OwlCarousel>
                }
                
            </>
        )
    }
}
export default Index;