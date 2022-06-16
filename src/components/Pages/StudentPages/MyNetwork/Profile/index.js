import React, { Component } from "react";
import Layouts from "../../../../Layout/Sidebar"
import Card from 'react-bootstrap/Card';
// import Profile1 from "../../../../assets/images/icons/Avatar1.png"
class Index extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
   
    render() {
        const profileData = [
            {
                'profileImage': 'Modal Title here..',
                'poofileIcon': 'Modal body content here...',
            }
        ];

        return (
            
            <>
                <Layouts />
                <div className="profile-model">
                    <div className="model-content">
                        <Card >
                            <Card.Img src="" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;