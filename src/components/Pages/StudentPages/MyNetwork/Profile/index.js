import React, { Component } from "react";
import Layouts from "../../../../Layout/Sidebar"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Rating from "../../../../CommonComponents/Rating";
import Avatar1 from "../../../../../assets/images/icons/Avatar1.png"


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: [
                {
                    'title': "About",
                    'bachelor': 'Stanford University, CA',
                    'major': 'Massachusetts Institute of Technology, Cambridge, MA',
                    'links': ['Facebook', 'Twitter', 'Instagram'],
                    'tags': ['Artificial intelegent', 'Data structures', 'Deep learning', 'Data science', 'Machine learning']

                }
            ],
            packageData: [
                {
                    'id': 1,
                    'title': 'Basic Package',
                    'bachelor': 'One time service',
                    'price': '15$',
                    'month': '3',
                    'service': 'In person 1:1 tutoring  ',
                    'text': '10 people subscripted currently',
                    'text1': '50 people subscripted last year',
                    'button': 'Purchase'
                },
                {
                    'id': 2,
                    'title': 'Standart Package',
                    'bachelor': 'One time service',
                    'price': '35$',
                    'month': '5',
                    'service': 'In person 1:1 tutoring  ',
                    'text': '23 people subscripted',
                    'button': 'Purchase'
                },
                {
                    'id': 3,
                    'title': 'Premium Package',
                    'bachelor': 'One time service',
                    'price': '55$',
                    'month': '6',
                    'service': 'In person 1:1 tutoring  ',
                    'text': '34 people subscripted',
                    'button': 'Purchase'
                }
            ],
            hoursData: [
                {
                    'title': 'Working hours',
                    'monday': ['8 am - 9 am', '10 am - 11 am', '11 am - 12 am', '1 pm - 2 pm', '4 pm - 5 pm'],
                    'tuesday': ['8 am - 9 am', '10 am - 11 am', '11 am - 12 am'],
                    'wednesday': ['8 am - 9 am', '10 am - 11 am'],
                    'thursday': ['11 am - 12 am', '1 pm - 2 pm', '4 pm - 5 pm'],
                    'friday': ['8 am - 9 am', '10 am - 11 am'],
                    'saturday': ['8 am - 9 am'],
                    'sunday': ['8 am - 9 am'],
                }
            ],
            reviewData: [
                {
                    'title': 'Working hours',
                    'stars5': '80',
                    'stars4': '30',
                    'stars3': '10',
                    'stars2': '0',
                    'stars1': '0',
                }
            ],
            studentsSaysData: [
                {
                    'id': 1,

                    'icon': Avatar1,
                    'name': 'Daniel',
                    'rating': '5',
                    'date': 'October 23, 2021',
                    'course': 'General',
                    'text': 'I love that Nikolay thoroughly prepares for each class and gives me the material accordingly to my goals. Unlike the many other teachers, Nikolay is interested in my progress.'

                },
                {
                    'id': 2,

                    'icon': Avatar1,
                    'name': 'Viktor',
                    'rating': '5',
                    'date': 'September 30, 2021',
                    'course': 'General',
                    'text': 'Nikolay is a greate mentor. He established a learning plan according to the mentee’s need and provide guidance and useful tips. I highly recommend him if you want to improve in field'

                }
            ],
            profileImage: [
                {
                    'icon': Avatar1,
                    'name': 'Viktor',
                    'rating': '5',
                    'profileImage': Image,

                }
            ]
        }
    }

    render() {
        let ProfileList = this.state.profileImage.map((element, key) => {
            return (
                <>
                    <div className="profilepic">
                        <div class="card"> <img class="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap" />
                            <div class="card-body little-profile">

                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-6">
                                        <div className="row m-0">
                                            <div className="col-sm-3 ps-0 ">
                                                <div class="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user" />
                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-md-8 pr-2">
                                                <h2 className="GetAdvisors__List__items__title">{element.name}</h2>
                                                <div className="GetAdvisors__List__items__rating">
                                                    <Rating
                                                        isRating={true}
                                                        RatingValue={element.rating}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-6">
                                        <a href="javascript:void(0)" className="btn model-content__cta cta--button">Request connection</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </>
            )
        });

        let ProfileDetails = this.state.profileData.map((element, key) => {

            return (
                <>
                    <div className="profile">
                        {/* single card  */}
                        <div className="row">

                            <div className=" col-12">
                                <div className="card__item">
                                    <div className="card__item__lists__card-height">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h3 className="card__item__lists__titel">
                                                    {element.title}
                                                </h3>
                                                <hr />
                                            </div>
                                            <div className="col-sm-6">
                                                <h3 className="card__item__lists__titel" style={{ visibility: "hidden" }}>
                                                    {"."}
                                                </h3>
                                                <hr />
                                            </div>
                                        </div>
                                        <div className="row m-0 mb-4">
                                            <div className="col-sm-6 ps-0">
                                                <div className="row m-0">
                                                    <div className="col-5 p-0 ">
                                                        <h3 className="card__item__lists__profile-sub">
                                                            Bachelor
                                                        </h3>
                                                    </div>
                                                    <div className="col-1">
                                                        <div className="">
                                                            :
                                                        </div>
                                                    </div>
                                                    <div className="col-6 ">
                                                        <h3 className="card__item__lists__profile-sub"><span className="sub-heading"> {element.bachelor}</span></h3>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row m-0">
                                                    <div className="col-5 p-0 ">
                                                        <h3 className="card__item__lists__profile-sub">
                                                            Major
                                                        </h3>
                                                    </div>
                                                    <div className="col-1">
                                                        <div className="">
                                                            :
                                                        </div>
                                                    </div>
                                                    <div className="col-6 ">
                                                        <h3 className="card__item__lists__profile-sub"><span className="sub-heading"> {element.major}</span></h3>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row m-0">
                                                    <div className="col-5 p-0 ">
                                                        <h3 className="card__item__lists__profile-sub">
                                                            Links
                                                        </h3>
                                                    </div>
                                                    <div className="col-1">
                                                        <div className="">
                                                            :
                                                        </div>
                                                    </div>
                                                    <div className="col-6 ">
                                                        <h3 className="card__item__lists__profile-sub">
                                                            <span className="sub-heading">

                                                                {element.links.map((links) =>
                                                                    <span key={links.toString() + key}>
                                                                        {links}
                                                                    </span>
                                                                )}

                                                            </span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 pe-0">
                                                <div className="subtitle">
                                                    <h3 className="card__item__lists__profile-sub">
                                                        Core skills :
                                                    </h3>
                                                    <div className="card__item__lists__tags">
                                                        {element.tags.map((tags) =>
                                                            <span key={tags.toString() + key}>
                                                                {tags}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </>
            );
        });
        {/* package  */ }
        let PackageDetails = this.state.packageData.map((element, key) => {
            return (
                <>


                    <div className="col-md-4 col-sm-6 pb-3">
                        <div className="card__item">
                            <div className="card__item__lists ">

                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="card__item__lists__titel">
                                            {element.title}
                                        </h3>
                                        <hr />

                                    </div>

                                </div>

                                <div className="row m-0 mb-4">
                                    <div className="col-sm-12 ps-0">
                                        <div className="row m-0">
                                            <div className="col-5 p-0 ">
                                                <h3 className="card__item__lists__profile-sub">
                                                    Bachelor
                                                </h3>
                                            </div>
                                            <div className="col-1">
                                                <div className="">
                                                    :
                                                </div>
                                            </div>
                                            <div className="col-6 ">
                                                <h3 className="card__item__lists__profile-sub">
                                                    <span className="sub-heading">
                                                        {element.bachelor}</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row m-0">
                                            <div className="col-5 p-0 ">
                                                <h3 className="card__item__lists__profile-sub">
                                                    Price
                                                </h3>
                                            </div>
                                            <div className="col-1">
                                                <div className="">
                                                    :
                                                </div>
                                            </div>
                                            <div className="col-6 ">
                                                <h3 className="card__item__lists__profile-sub">
                                                    <span className="sub-heading">
                                                        {element.price}</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row m-0">
                                            <div className="col-5 p-0 ">
                                                <h3 className="card__item__lists__profile-sub">
                                                    Paid session per month

                                                </h3>
                                            </div>
                                            <div className="col-1">
                                                <div className="">
                                                    :
                                                </div>
                                            </div>
                                            <div className="col-6 ">
                                                <h3 className="card__item__lists__profile-sub">
                                                    <span className="sub-heading"> {element.month}
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row m-0">
                                            <div className="col-5 p-0 ">
                                                <h3 className="card__item__lists__profile-sub">
                                                    Type of service
                                                </h3>
                                            </div>
                                            <div className="col-1">
                                                <div className="">
                                                    :
                                                </div>
                                            </div>
                                            <div className="col-6 ">
                                                <h3 className="card__item__lists__profile-sub">
                                                    <span className="sub-heading">
                                                        {element.service}
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className="profile-footer">
                                    <p className="GetAdvisors__sub-title pargh">
                                        {element.text} </p>
                                    <p className="GetAdvisors__sub-title pargh">
                                        {element.text1}
                                    </p>

                                    <div className="footer__cta">
                                        {element.button}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            );
        });
        {/* working hours  */ }
        let hoursDetails = this.state.hoursData.map((element, key) => {

            return (
                <>
                    <div className="row">

                        <div className=" col-12">
                            <div className="card__item">
                                <div className="card__item__lists__card-height">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h3 className="card__item__lists__titel">
                                                {element.title}
                                            </h3>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 ">
                                            <h3 className="card__item__lists__profile-sub">
                                                <div className="card__item__lists__tags">
                                                    Monday {element.monday.map((monday) =>
                                                        <span className="sub-heading pt-2" key={monday.toString() + key}>
                                                            {monday}
                                                        </span>
                                                    )}
                                                </div>
                                            </h3>
                                            <div className="col-6">
                                                <hr />
                                            </div>

                                            <h3 className="card__item__lists__profile-sub">
                                                <div className="card__item__lists__tags">
                                                    Tuesday {element.tuesday.map((tuesday) =>
                                                        <span className="sub-heading pt-2" key={tuesday.toString() + key}>
                                                            {tuesday}
                                                        </span>
                                                    )}</div>
                                            </h3>
                                            <div className="col-6">
                                                <hr />
                                            </div>
                                            <h3 className="card__item__lists__profile-sub">
                                                <div className="card__item__lists__tags">
                                                    Wednesday {element.wednesday.map((wednesday) =>
                                                        <span className="sub-heading pt-2" key={wednesday.toString() + key}>
                                                            {wednesday}
                                                        </span>
                                                    )}</div>
                                            </h3>
                                            <div className="col-6">
                                                <hr />
                                            </div>
                                            <h3 className="card__item__lists__profile-sub">
                                                <div className="card__item__lists__tags">
                                                    Thursday {element.thursday.map((thursday) =>
                                                        <span className="sub-heading pt-2" key={thursday.toString() + key}>
                                                            {thursday}
                                                        </span>
                                                    )}
                                                </div>
                                            </h3>
                                            <div className="col-6">
                                                <hr />
                                            </div>
                                            <h3 className="card__item__lists__profile-sub">
                                                <div className="card__item__lists__tags">
                                                    Friday  {element.friday.map((friday) =>
                                                        <span className="sub-heading pt-2" key={friday.toString() + key}>
                                                            {friday}
                                                        </span>
                                                    )}
                                                </div>
                                            </h3>
                                            <div className="col-6">
                                                <hr />
                                            </div>
                                            <h3 className="card__item__lists__profile-sub">
                                                <div className="card__item__lists__tags">
                                                    Saturday  {element.saturday.map((saturday) =>
                                                        <span className="sub-heading pt-2" key={saturday.toString() + key}>
                                                            {saturday}
                                                        </span>
                                                    )}
                                                </div>
                                            </h3>
                                            <div className="col-6">
                                                <hr />
                                            </div>
                                            <h3 className="card__item__lists__profile-sub">
                                                <div className="card__item__lists__tags">
                                                    Sunday  {element.sunday.map((sunday) =>
                                                        <span className="sub-heading pt-2" key={sunday.toString() + key}>
                                                            {sunday}
                                                        </span>
                                                    )}
                                                </div>
                                            </h3>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </>
            );
        });
        let reviewDetails = this.state.reviewData.map((element, key) => {
            return (
                <>

                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="card__item__lists__titel">
                                {element.title}
                            </h3>
                            <hr />
                        </div>

                    </div>
                    <div className="row m-0 mb-4">
                        <div className="col-sm-8 ps-0">
                            <div className="row m-0">
                                <h3 className="card__item__lists__profile-sub">
                                    <div className="bar-size">
                                        <div className="col-3 p-0 ">

                                            5 stars

                                        </div>

                                        <div className="col-8">
                                            <ProgressBar now={element.stars5} />
                                        </div>
                                    </div>

                                </h3>
                            </div>
                            <div className="row m-0">
                                <h3 className="card__item__lists__profile-sub">
                                    <div className="bar-size">
                                        <div className="col-3 p-0 ">

                                            4 stars

                                        </div>

                                        <div className="col-8">
                                            <ProgressBar now={element.stars4} />
                                        </div>
                                    </div>
                                </h3>
                            </div>
                            <div className="row m-0">
                                <h3 className="card__item__lists__profile-sub">
                                    <div className="bar-size">
                                        <div className="col-3 p-0 ">

                                            3 stars

                                        </div>

                                        <div className="col-8">
                                            <ProgressBar now={element.stars3} />
                                        </div>
                                    </div>
                                </h3>
                            </div>
                            <div className="row m-0">
                                <h3 className="card__item__lists__profile-sub">
                                    <div className="bar-size">
                                        <div className="col-3 p-0 ">

                                            2 stars

                                        </div>

                                        <div className="col-8">
                                            <ProgressBar now={element.stars2} />
                                        </div>
                                    </div>
                                </h3>
                            </div>
                            <div className="row m-0">
                                <h3 className="card__item__lists__profile-sub">
                                    <div className="bar-size">
                                        <div className="col-3 p-0 ">

                                            1 stars

                                        </div>

                                        <div className="col-8">
                                            <ProgressBar now={element.stars1} />
                                        </div>
                                    </div>
                                </h3>
                            </div>

                        </div>
                        <div className="col-sm-1 d-flex">

                            <div class="vr">

                            </div>
                        </div>
                        <div className="col-sm-3 pe-0">
                            <h2 class="card__item__lists__titel">4.0</h2>
                            <div className="GetAdvisors__List__items__rating">
                                <Rating
                                    isRating={true}
                                    RatingValue={4}
                                />
                                <p>11 review</p>
                            </div>
                        </div>
                    </div>

                </>

            )
        });
        // student says
        let studentDetails = this.state.studentsSaysData.map((element, key) => {
            return (
                <>

                    <hr />
                    <div className="student">
                        <div className="row m-0">
                            <div className="col-1 p-0 ">
                                <div className="Avatar-icon">
                                    <img src={element.icon} alt={element.AvatarIconAlt} />
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="student">
                                    <h2 className="student__title ">{element.name}
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_13_14303)">
                                                <path d="M11.0673 4.27371C11.161 4.56607 11.0843 4.881 10.867 5.09558L8.96704 6.97182C8.92975 7.00868 8.91273 7.06175 8.92152 7.11377L9.37004 9.76309C9.42135 10.066 9.30072 10.3665 9.05523 10.5472C8.91655 10.6494 8.75422 10.7013 8.59086 10.7013C8.46508 10.7013 8.33868 10.6705 8.22186 10.6083L5.87338 9.35749C5.82723 9.33291 5.77218 9.33291 5.72605 9.35749L3.37759 10.6083C3.10904 10.7513 2.78964 10.728 2.54415 10.5473C2.29867 10.3666 2.17806 10.0661 2.22934 9.76311L2.67786 7.11379C2.68668 7.06177 2.66964 7.0087 2.63235 6.97185L0.732388 5.09558C0.515075 4.881 0.438341 4.56607 0.532138 4.27371C0.625935 3.98134 0.870692 3.77227 1.17097 3.72808L3.79663 3.34157C3.84819 3.33397 3.89272 3.30118 3.91581 3.25386L5.09005 0.843404C5.22433 0.56773 5.49625 0.396484 5.79969 0.396484C6.10314 0.396484 6.37506 0.56773 6.50933 0.843404L7.68358 3.25383C7.70664 3.30118 7.75119 3.33397 7.80273 3.34154L10.4284 3.72808C10.7287 3.77227 10.9735 3.98134 11.0673 4.27371Z"
                                                    fill={"#E64A19"}
                                                    stroke={"#E64A19"}
                                                    strokeWidth={"1.5"}
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_13_14303">
                                                    <rect width="10.8" height="11" fill="white" transform="translate(0.400024)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="sub-heading"> {element.rating} </span>
                                    </h2>
                                    <p className="student__sub-title">{element.date}
                                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#5C5C5C" />
                                        </svg>
                                        {element.course}
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-10">
                                        <p class="student__List">{element.text}</p>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>


                </>
            )
        });
        return (
            <>
                <Layouts />

                <div className="Templates bg-temp">
                    <div className="model-content ">
                        <div>
                            {ProfileList}
                        </div>
                        <div className="p-2">
                            {this.state.profileData && this.state.profileData.length > 0 &&
                                <div>
                                    {ProfileDetails}
                                </div>

                            }
                            {this.state.packageData && this.state.packageData.length > 0 &&
                                <div className="row">
                                    {PackageDetails}
                                </div>

                            }
                            {this.state.hoursData && this.state.hoursData.length > 0 &&
                                <div>
                                    {hoursDetails}
                                </div>
                            }
                            <div className="row">

                                <div className=" col-12">
                                    <div className="card__item">
                                        <div className="card__item__lists__card-height">
                                            {reviewDetails}
                                            {this.state.studentsSaysData && this.state.studentsSaysData.length > 0 &&
                                                <div>

                                                    {studentDetails}
                                                </div>
                                            }
                                            <div className="footer__cta">
                                                More reviews

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>


        )
    }
}

export default Index;