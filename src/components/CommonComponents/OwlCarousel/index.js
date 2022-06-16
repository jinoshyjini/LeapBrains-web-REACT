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
            //items: this.props.Carouselitems ? this.props.Carouselitems : 4,
            nav: false,
            //navText:["<div className='nav-btn prev-slide'>prev</div>","<div className='nav-btn next-slide'>next</div>"],
            autoplay: false,
            slideBy: 1,
            dots: false,
            dotsEach: false,
            dotData: true,
            loop: this.props.islooping ? this.props.islooping : false,
            responsive:{
                0:{
                    items:1
                },
                450:{
                    items:2
                },
                768:{
                    items:3
                },
                1000:{
                    items:this.props.Carouselitems ? this.props.Carouselitems : 4
                }
            }
        };
        let { OwlCarouselData } = this.props;
        
        var OwlCarouselList = OwlCarouselData && OwlCarouselData.length > 0 && OwlCarouselData.map((element,key) => {    
            return (
                <div>
                    <div className='owl__item pe-2 ps-2'>
                        <a href="javascript: void(0)">
                            <p className="owl__item__desc">{element.Description}</p>
                            <div className="owl__item__lists">
                                <div className="row">
                                    <div className="col-sm-6 col-6">
                                        <div className="owl__item__lists__icon">
                                            <img src={element.AdvisorsImage} alt="images"  />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-6">
                                        <div className="owl__item__lists__session">
                                            <p>{element.Session}</p>
                                        </div>
                                        
                                        <div className="owl__item__lists__rating">
                                        {element.Rating ? 
                                            <p>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.2164 5.51739L10.2417 4.94083L8.46484 1.34551C8.41631 1.24708 8.33647 1.16739 8.23784 1.11895C7.9905 0.997076 7.68992 1.09864 7.56625 1.34551L5.78942 4.94083L1.81465 5.51739C1.70507 5.53301 1.60488 5.58458 1.52817 5.6627C1.43543 5.75784 1.38433 5.88583 1.38609 6.01855C1.38785 6.15127 1.44233 6.27786 1.53756 6.37051L4.41336 9.16895L3.73394 13.1205C3.71801 13.2124 3.7282 13.307 3.76336 13.3934C3.79852 13.4798 3.85724 13.5547 3.93286 13.6095C4.00849 13.6644 4.09799 13.6969 4.19122 13.7036C4.28445 13.7102 4.37767 13.6906 4.46033 13.6471L8.01555 11.7815L11.5708 13.6471C11.6678 13.6986 11.7805 13.7158 11.8886 13.6971C12.161 13.6502 12.3441 13.3924 12.2972 13.1205L11.6177 9.16895L14.4935 6.37051C14.5718 6.29395 14.6235 6.19395 14.6391 6.08458C14.6814 5.81114 14.4904 5.55801 14.2164 5.51739ZM10.4076 8.7752L10.9727 12.0611L8.01555 10.5111L5.05834 12.0627L5.62348 8.77676L3.23142 6.44864L6.53773 5.96895L8.01555 2.97989L9.49337 5.96895L12.7997 6.44864L10.4076 8.7752Z" fill="#212224"/>
                                                </svg>
                                                <span>{element.Rating}</span>
                                            </p>
                                            : 
                                            ""
                                        }
                                        </div>
                                    
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="owl__item__lists__titel">{element.AdvisorsName}</h3>
                                        <div className="owl__item__lists__location">
                                            {element.Location && <p>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0748 5.49579C11.8625 5.00796 11.5563 4.56627 11.1737 4.19564C10.7897 3.82167 10.3371 3.52484 9.84048 3.32138C9.3239 3.10788 8.77574 3 8.21067 3C7.64559 3 7.09743 3.10788 6.58086 3.32026C6.0812 3.5259 5.63342 3.82032 5.24768 4.19452C4.86524 4.56535 4.55912 5.00699 4.34649 5.49466C4.12655 6.00034 4.01489 6.53748 4.01489 7.09035C4.01489 7.88369 4.20551 8.67367 4.57997 9.43555C4.88112 10.048 5.30182 10.6447 5.83193 11.2122C6.73764 12.1808 7.68732 12.773 7.95689 12.9315C8.03341 12.9765 8.12068 13.0002 8.20954 13C8.29752 13 8.38436 12.9775 8.46219 12.9315C8.73176 12.773 9.68145 12.1808 10.5871 11.2122C11.1173 10.6458 11.538 10.048 11.8391 9.43555C12.2158 8.67479 12.4064 7.88594 12.4064 7.09147C12.4064 6.5386 12.2948 6.00146 12.0748 5.49579ZM8.21067 12.1381C7.46738 11.6673 4.82698 9.80301 4.82698 7.09147C4.82698 6.21609 5.17775 5.39353 5.81502 4.77323C6.45453 4.15181 7.30497 3.80908 8.21067 3.80908C9.11637 3.80908 9.9668 4.15181 10.6063 4.77436C11.2436 5.39353 11.5944 6.21609 11.5944 7.09147C11.5944 9.80301 8.95395 11.6673 8.21067 12.1381ZM8.21067 5.20249C7.11435 5.20249 6.22557 6.08799 6.22557 7.18024C6.22557 8.2725 7.11435 9.15799 8.21067 9.15799C9.30698 9.15799 10.1958 8.2725 10.1958 7.18024C10.1958 6.08799 9.30698 5.20249 8.21067 5.20249ZM9.10396 8.07023C8.9868 8.1873 8.84756 8.28013 8.69425 8.34338C8.54095 8.40664 8.3766 8.43907 8.21067 8.43881C7.87343 8.43881 7.55649 8.30734 7.31737 8.07023C7.19987 7.9535 7.1067 7.81478 7.04321 7.66204C6.97972 7.5093 6.94717 7.34556 6.94742 7.18024C6.94742 6.84425 7.07939 6.52849 7.31737 6.29026C7.55649 6.05203 7.87343 5.92168 8.21067 5.92168C8.54791 5.92168 8.86485 6.05203 9.10396 6.29026C9.34308 6.52849 9.47391 6.84425 9.47391 7.18024C9.47391 7.51624 9.34308 7.832 9.10396 8.07023Z" fill="#212224"/>
                                                </svg>
                                                <span>{element.Location}</span>
                                            </p> }
                                            {element.University && <p>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.8396 7.64649L8.56168 3.38664L8.27494 3.10095C8.2096 3.03629 8.12125 3 8.02916 3C7.93706 3 7.84871 3.03629 7.78338 3.10095L3.21874 7.64649C3.1518 7.71292 3.09889 7.79205 3.06314 7.8792C3.02739 7.96634 3.00953 8.05974 3.0106 8.15387C3.01503 8.54214 3.33942 8.85208 3.72912 8.85208H4.19965V12.4446H11.8587V8.85208H12.3392C12.5285 8.85208 12.7067 8.77818 12.8407 8.64472C12.9066 8.57921 12.9589 8.50132 12.9944 8.41555C13.03 8.32978 13.0481 8.23784 13.0477 8.14505C13.0477 7.95754 12.9735 7.77995 12.8396 7.64649ZM8.64914 11.6504H7.40917V9.40028H8.64914V11.6504ZM11.0615 8.05791V11.6504H9.35769V9.13556C9.35769 8.89179 9.15952 8.69435 8.91485 8.69435H7.14346C6.89879 8.69435 6.70062 8.89179 6.70062 9.13556V11.6504H4.99677V8.05791H3.93394L8.03026 3.98006L8.28601 4.23485L12.1255 8.05791H11.0615Z" fill="#212224"/>
                                                </svg>
                                                <span>{element.University}</span>
                                            </p> }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 p-0">
                                        <div className="owl__item__lists__tags">
                                            {element.tags.map((tags) =>
                                                <span key={tags.toString()+key}>
                                                    {tags}
                                                </span>
                                            )}
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <a href="javascript:void(0)" className="owl__item__lists__cta">View profile</a>
                                    </div>
                                </div>
                            </div>
                        </a>
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