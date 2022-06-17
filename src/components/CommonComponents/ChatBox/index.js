import React, { Component } from "react";
import  "../../../assets/css/chatbox.less"
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isChatactive:false,
            isShowchatIcon:true,
            isShowCloseIcon:false,
        };
    }
    componentWillMount() {
    }
    onclickprime(e){
        // this.toggleFab()
        const currentState = this.state.isChatactive;
        const ShowchatIcon = this.state.isShowchatIcon;
        const ShowCloseIcon = this.state.isShowCloseIcon;
        this.setState({ isChatactive: !currentState,isShowchatIcon:!ShowchatIcon,isShowCloseIcon:!ShowCloseIcon });
    }
    

    hideChat(hide) {
        let prime = document.getElementsByClassName('prime');
        let chat_fullscreen_loader = document.getElementsByClassName('chat_fullscreen_loader');
        let chat_login = document.getElementsByClassName('chat_login');

        let chat_converse = document.getElementById("chat_converse");
        let chat_body = document.getElementById("chat_body");
        let chat_form = document.getElementById("chat_form");
        let chat_fullscreen = document.getElementById("chat_fullscreen");
        switch (hide) {
          case 0:
                chat_converse.css('display', 'none');
                chat_body.css('display', 'none');
                chat_form.css('display', 'none');
                chat_login.css('display', 'block');
                chat_fullscreen_loader.css('display', 'none');
                 chat_fullscreen.css('display', 'none');
                break;
          case 1:
                chat_converse.css('display', 'block');
                chat_body.css('display', 'none');
                chat_form.css('display', 'none');
                chat_login.css('display', 'none');
                chat_fullscreen_loader.css('display', 'block');
                break;
          case 2:
                chat_converse.css('display', 'none');
                chat_body.css('display', 'block');
                chat_form.css('display', 'none');
                chat_login.css('display', 'none');
                chat_fullscreen_loader.css('display', 'block');
                break;
          case 3:
                chat_converse.css('display', 'none');
                chat_body.css('display', 'none');
                chat_form.css('display', 'block');
                chat_login.css('display', 'none');
                chat_fullscreen_loader.css('display', 'block');
                break;
          case 4:
                chat_converse.css('display', 'none');
                chat_body.css('display', 'none');
                chat_form.css('display', 'none');
                chat_login.css('display', 'none');
                chat_fullscreen_loader.css('display', 'block');
                chat_fullscreen.css('display', 'block');
                break;
        }
    }
    render() { 
        
        return (
            <>      
                <div className="fabs">
                    <div className={this.state.isChatactive ? 'chat is-visible': "chat"} >
                        <div className="chat_header">
                            <div className="chat_option">
                                <div className="header_img">
                                <img src="https://picsum.photos/200/300?random=1" />
                                </div>
                                <span id="chat_head">Jane Doe</span> <span className="agent">Agent</span> <span
                                className="online">(Online)</span>
                            </div>
                        </div>
                        <div id="chat_converse" className="chat_conversion chat_converse">
                        <a id="chat_second_screen" onClick={(e) => this.onclickchat_second_screen(e)} className="fab"><i className="zmdi zmdi-arrow-right"></i></a>
                        <span className="chat_msg_item chat_msg_item_admin">
                            <div className="chat_avatar">
                            <img src="https://picsum.photos/200/300?random=2" />
                            </div>Hey there! Any question?
                        </span>
                        <span className="chat_msg_item chat_msg_item_user">
                            Hello!</span>
                        <span className="status">20m ago</span>
                        <span className="chat_msg_item chat_msg_item_admin">
                            <div className="chat_avatar">
                            <img src="https://picsum.photos/200/300?random=2" />
                            </div>Hey! Would you like to talk sales, support, or anyone?
                        </span>
                        <span className="chat_msg_item chat_msg_item_user">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        <span className="status2">Just now. Not seen yet</span>
                        </div>
                        
                        <div className="fab_field">
                        <a id="fab_camera" className="fab">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3Z" stroke="#959699" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 13.0711L5.51472 9L10.0711 15.0711" stroke="#959699" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C8.89513 8 8 7.1047 8 6C8 4.8953 8.89513 4 10 4C11.1043 4 12 4.8953 12 6C12 7.1047 11.1043 8 10 8Z" stroke="#959699" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a id="fab_send" className="fab">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8151 11.9983L6.39844 18.2051L6.39844 5.79492L17.8151 11.9983Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.39844 11.9992H10.3984" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Send
                        </a>
                        <textarea id="chatSend" name="chat_message" placeholder="Send a message"
                            className="chat_field chat_message"></textarea>
                        </div>
                    </div>
                    <a id="prime"  onClick={(e) => this.onclickprime(e)} className="fab">
                        <span className={this.state.isShowchatIcon ? 'chat-icon chat-icons show': "chat-icon chat-icons "} >
                            <svg width="24" height="24" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59998 3.59961C1.59998 2.49504 2.49541 1.59961 3.59998 1.59961H12.4C13.5045 1.59961 14.4 2.49504 14.4 3.59961V11.5552L10.1333 15.8218V11.5552H3.59998C2.49541 11.5552 1.59998 10.6597 1.59998 9.55517V3.59961Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span className={this.state.isShowCloseIcon ? 'close-icon chat-icons show': "close-icon chat-icons "} >
                            <img src="https://img.icons8.com/ios/24/undefined/delete-sign--v1-white.png"/>
                        </span>
                    </a>
                </div>
                
            </>
        )
    }
}
export default Index;