import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import Layouts from "../../../Layout/Sidebar"
import '../../../../assets/css/Schedule.less';
import Search from "../../../CommonComponents/Search";


class Index extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            title:'',
            advisor:'',
            date:'',
            description:''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
       
        event.preventDefault();
        console.log(this.state.title)
        console.log(this.state.advisor)
        console.log(this.state.description)
    }
    handleChange(event){
        this.setState({
          
          [event.target.name] : event.target.value
        })
        console.log(this.state.title)

      }

    handleDateClick = () => {
        this.setState({ ...this.state, show: true })
       
        
    }
    handleClose = () => {
        this.setState({ ...this.state, show: false })
    }
    
    render() {
        //const events = [{ title: this.state.title, date:this.state.date }]; 
        console.log(this.state.date)
       const events= [
            
            {
                title: '8 excusés',
                start: '2022-06-06T12:30:00',
            },
            {
                title: '8 présents',
                start: '2022-06-08T04:05:00'
            },
        ]
        
        return (
            <>
                <Layouts /> 
                
                    <div className="cal">
                    <FullCalendar
                        customButtons={{
                            myCustomButton: { icon: 'calendar', },
                            para: { text: 'Here all your planned events. You will find information for each event as well as you can plan new event', },
                        }}
                        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]} 
                        events={events}
                        datesSet={this.handleDatesSet}
                        themeSystem='bootstrapFontAwesome'
                        height='690px'
                        editable='true'
                        selectable='true'
                        dayCellClassNames={'newclass'}
                        
                        headerToolbar={{ left: "title,", center: "prev,myCustomButton,next", right: "" }} 
                    />
                    <div className="top-cal">
                    <div class="cal-search">
                    <span  class="cal-searchIcon">
                        <svg width="18" height="19" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5046 2.93061C11.3749 -0.101869 6.28112 -0.101869 3.15144 2.93061C0.0224364 5.96374 0.0224364 10.8987 3.15144 13.9318C5.93851 16.6316 10.2792 16.9209 13.4069 14.8127C13.4727 15.1144 13.6233 15.4024 13.8655 15.637L18.4233 20.0533C19.0875 20.6955 20.1608 20.6955 20.8216 20.0533C21.4852 19.4104 21.4852 18.3704 20.8216 17.7295L16.2638 13.3119C16.023 13.0792 15.7251 12.9326 15.4137 12.8688C17.5909 9.83766 17.2923 5.63242 14.5046 2.93061ZM13.0656 12.5375C10.729 14.8015 6.92633 14.8015 4.59043 12.5375C2.25521 10.2735 2.25521 6.58956 4.59043 4.32556C6.92633 2.06221 10.729 2.06221 13.0656 4.32556C15.4022 6.58956 15.4022 10.2735 13.0656 12.5375Z" fill="#3F51B5"/>
                        <path d="M13.8954 14.7061L13.7384 13.9862L13.1274 14.3981C10.1899 16.3781 6.11176 16.1032 3.49945 13.5728C0.573125 10.7361 0.5731 6.12639 3.49937 3.28969C6.43515 0.445102 11.2208 0.44506 14.1566 3.28965C16.7639 5.81656 17.0422 9.7445 15.0076 12.5771L14.5575 13.2039L15.3134 13.3587C15.5389 13.4048 15.7488 13.5097 15.9161 13.6712C15.9162 13.6713 15.9163 13.6714 15.9164 13.6715L20.4736 18.0885L20.4743 18.0891C20.934 18.5332 20.9348 19.2474 20.4737 19.6942L20.4731 19.6947C20.0069 20.1479 19.2418 20.1492 18.7709 19.6938L14.2134 15.2779C14.0453 15.115 13.9412 14.9164 13.8954 14.7061ZM4.24239 12.8965L4.24245 12.8965C6.77229 15.3485 10.8831 15.3485 13.4135 12.8966C15.9529 10.4361 15.9529 6.42694 13.4135 3.96647L13.4135 3.96642C10.883 1.51529 6.77233 1.51521 4.2425 3.96647L4.24239 3.96658C1.70456 6.42702 1.70456 10.436 4.24239 12.8965Z" stroke="#3F51B5" strokeOpacity="0.2"/>
                        </svg>
                    </span>
                    <input type="text" class="cal-searchTerm" placeholder="" />
                    </div>
                    <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17 13C17 12.4477 17.4477 12 18 12H19C19.5523 12 20 12.4477 20 13V14H27C27.5523 14 28 14.4477 28 15C28 15.5523 27.5523 16 27 16H20V17C20 17.5523 19.5523 18 19 18H18C17.4477 18 17 17.5523 17 17V16H13C12.4477 16 12 15.5523 12 15C12 14.4477 12.4477 14 13 14H17V13ZM13 24C12.4477 24 12 24.4477 12 25C12 25.5523 12.4477 26 13 26H22V27C22 27.5523 22.4477 28 23 28H24C24.5523 28 25 27.5523 25 27V26H27C27.5523 26 28 25.5523 28 25C28 24.4477 27.5523 24 27 24H25V23C25 22.4477 24.5523 22 24 22H23C22.4477 22 22 22.4477 22 23V24H13Z" fill="#1B1C1E"/></svg>
                    <button className="cal-btn" onClick={this.handleDateClick}>+</button>
                    </div>
                    <div className="cal-select-month">
                    <select name="month" id="cal-month">
                          <option className="fc-dayGridMonth-button fc-button fc-button-primary fc-button-active"value="month">Month</option>
                          <option className="fc-timeGridWeek-button fc-button fc-button-primary" value="week">Week</option>
                          <option className="fc-timeGridDay-button fc-button fc-button-primary" value="day">Day</option>
                         
                    </select>
                    </div>
                    <div className="cal-para"><p>Here all your planned events. You will find information for each event as well as you can plan new event</p></div>
                    {this.state.show &&
                        <div className='add-event'>
                            <div >
                              <form  className='event-box' onSubmit={this.handleSubmit}> 
                                <div className='ev-head ev-ro'>
                                    <span className='ev-title'>Book session?</span>
                                    <span className='ev-close' onClick={this.handleClose}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.29828 13.7006C2.69203 14.0944 3.33043 14.0944 3.72418 13.7006L7.99803 9.42678L12.2776 13.7064C12.6714 14.1001 13.3098 14.1001 13.7036 13.7064C14.0973 13.3126 14.0973 12.6742 13.7036 12.2805L9.42394 8.00087L13.7055 3.71927C14.0993 3.32552 14.0993 2.68712 13.7055 2.29336C13.3118 1.89961 12.6734 1.89961 12.2796 2.29336L7.99803 6.57496L3.7222 2.29913C3.32845 1.90538 2.69005 1.90538 2.29629 2.29913C1.90254 2.69288 1.90254 3.33129 2.29629 3.72504L6.57212 8.00087L2.29828 12.2747C1.90452 12.6685 1.90452 13.3069 2.29828 13.7006Z" fill="#1B1C1E" />
                                        </svg>

                                    </span>
                                </div>
                                <div className='ev-r1 '>
                                    <input type="text" name="title" value={this.state.title}  onChange={this.handleChange} id='in-title' placeholder='title' />
                                </div>
                                <div className='ev-r5 ev-ro'>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8972 13.0563C13.4644 12.7516 14.1136 12.5781 14.805 12.5781H14.8074C14.8777 12.5781 14.9105 12.4938 14.8589 12.4469C14.1399 11.8016 13.3185 11.2804 12.4285 10.9047C12.4191 10.9 12.4097 10.8977 12.4004 10.893C13.8558 9.83594 14.8027 8.11797 14.8027 6.17969C14.8027 2.96875 12.2058 0.367188 9.00191 0.367188C5.79801 0.367188 3.20348 2.96875 3.20348 6.17969C3.20348 8.11797 4.15035 9.83594 5.60816 10.893C5.59879 10.8977 5.58941 10.9 5.58004 10.9047C4.53238 11.3477 3.59254 11.9828 2.78395 12.7938C1.98002 13.5962 1.33999 14.5475 0.89957 15.5945C0.466242 16.6198 0.232379 17.7184 0.210508 18.8312C0.209882 18.8563 0.21427 18.8812 0.223412 18.9044C0.232554 18.9277 0.246266 18.949 0.26374 18.9669C0.281214 18.9848 0.302096 18.999 0.325155 19.0087C0.348215 19.0184 0.372986 19.0234 0.398008 19.0234H1.80191C1.9027 19.0234 1.98707 18.9414 1.98941 18.8406C2.03629 17.0312 2.76051 15.3367 4.04254 14.0523C5.36676 12.7234 7.12926 11.9922 9.00426 11.9922C10.3332 11.9922 11.6082 12.3602 12.7074 13.0492C12.7356 13.067 12.768 13.077 12.8014 13.0782C12.8347 13.0794 12.8678 13.0719 12.8972 13.0563ZM9.00426 10.2109C7.93082 10.2109 6.92066 9.79141 6.15895 9.02969C5.78417 8.65588 5.48706 8.21161 5.28473 7.72248C5.0824 7.23335 4.97884 6.70901 4.98004 6.17969C4.98004 5.10391 5.39957 4.09141 6.15895 3.32969C6.91832 2.56797 7.92848 2.14844 9.00426 2.14844C10.08 2.14844 11.0879 2.56797 11.8496 3.32969C12.2243 3.70349 12.5215 4.14776 12.7238 4.63689C12.9261 5.12603 13.0297 5.65036 13.0285 6.17969C13.0285 7.25547 12.6089 8.26797 11.8496 9.02969C11.0879 9.79141 10.0777 10.2109 9.00426 10.2109ZM17.6246 15.7891H15.6558V13.8203C15.6558 13.7172 15.5714 13.6328 15.4683 13.6328H14.1558C14.0527 13.6328 13.9683 13.7172 13.9683 13.8203V15.7891H11.9996C11.8964 15.7891 11.8121 15.8734 11.8121 15.9766V17.2891C11.8121 17.3922 11.8964 17.4766 11.9996 17.4766H13.9683V19.4453C13.9683 19.5484 14.0527 19.6328 14.1558 19.6328H15.4683C15.5714 19.6328 15.6558 19.5484 15.6558 19.4453V17.4766H17.6246C17.7277 17.4766 17.8121 17.3922 17.8121 17.2891V15.9766C17.8121 15.8734 17.7277 15.7891 17.6246 15.7891Z" fill="#919293" />
                                    </svg>
                                    <select name="advisor" value={this.state.advisor}  onChange={this.handleChange} id="advisor">
                                        <option value="">Select advisor</option>
                                    </select>
                                </div>
                                <div className='ev-r6 '>
                                    <div className='date'>
                                        <svg width="23" height="24" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3.55859" width="13.7846" height="12.8" rx="1.5" stroke="#919293" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" /><path d="M14.7839 7.82599H0.999283" stroke="#919293" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" /><path d="M4.44626 1V2.70667" stroke="#919293" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" /><path d="M11.3383 1V2.70667" stroke="#919293" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" /></svg>
                                        <input type="date" name="date" id='ev-date' placeholder='select date'  onChange={this.handleChange}/>
                                    </div>
                                    <div className='time'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z" fill="#919293" />
                                            <path d="M16.0945 14.9672L12.7523 12.5508V6.75C12.7523 6.64687 12.668 6.5625 12.5648 6.5625H11.4375C11.3344 6.5625 11.25 6.64687 11.25 6.75V13.2047C11.25 13.2656 11.2781 13.3219 11.3273 13.357L15.2039 16.1836C15.2883 16.2445 15.4055 16.2258 15.4664 16.1437L16.1367 15.2297C16.1976 15.1429 16.1789 15.0258 16.0945 14.9672Z" fill="#919293" />
                                        </svg>
                                        <input type="time" name="time" id='ev-time' placeholder='select time'  onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className='ev-r7'>
                                    <span className='ev-zoom'>ZOOM</span>
                                    <button className='zoom-btn'>Going with Zoom</button>
                                </div>
                                <div className='ev-r8'>
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.2999 0.400391C1.06121 0.400391 0.832289 0.495212 0.663506 0.663994C0.494723 0.832777 0.399902 1.0617 0.399902 1.30039C0.399902 1.53909 0.494723 1.768 0.663506 1.93679C0.832289 2.10557 1.06121 2.20039 1.2999 2.20039H18.6999C18.9386 2.20039 19.1675 2.10557 19.3363 1.93679C19.5051 1.768 19.5999 1.53909 19.5999 1.30039C19.5999 1.0617 19.5051 0.832777 19.3363 0.663994C19.1675 0.495212 18.9386 0.400391 18.6999 0.400391H1.2999Z" fill="#919293" /><path d="M1.2999 4C1.06121 4 0.832289 4.09482 0.663506 4.2636C0.494723 4.43239 0.399902 4.66131 0.399902 4.9C0.399902 5.13869 0.494723 5.36761 0.663506 5.5364C0.832289 5.70518 1.06121 5.8 1.2999 5.8H18.6999C18.9386 5.8 19.1675 5.70518 19.3363 5.5364C19.5051 5.36761 19.5999 5.13869 19.5999 4.9C19.5999 4.66131 19.5051 4.43239 19.3363 4.2636C19.1675 4.09482 18.9386 4 18.6999 4H1.2999Z" fill="#919293" /><path d="M0.399902 8.49961C0.399902 8.26091 0.494723 8.032 0.663506 7.86321C0.832289 7.69443 1.06121 7.59961 1.2999 7.59961H18.6999C18.9386 7.59961 19.1675 7.69443 19.3363 7.86321C19.5051 8.032 19.5999 8.26091 19.5999 8.49961C19.5999 8.7383 19.5051 8.96722 19.3363 9.13601C19.1675 9.30479 18.9386 9.39961 18.6999 9.39961H1.2999C1.06121 9.39961 0.832289 9.30479 0.663506 9.13601C0.494723 8.96722 0.399902 8.7383 0.399902 8.49961Z" fill="#919293" /><path d="M1.2999 11.2012C1.06121 11.2012 0.832289 11.296 0.663506 11.4648C0.494723 11.6336 0.399902 11.8625 0.399902 12.1012C0.399902 12.3399 0.494723 12.5688 0.663506 12.7376C0.832289 12.9064 1.06121 13.0012 1.2999 13.0012H12.6999C12.9386 13.0012 13.1675 12.9064 13.3363 12.7376C13.5051 12.5688 13.5999 12.3399 13.5999 12.1012C13.5999 11.8625 13.5051 11.6336 13.3363 11.4648C13.1675 11.296 12.9386 11.2012 12.6999 11.2012H1.2999Z" fill="#919293" /></svg>
                                    <input type="text" name="description"  value={this.state.description} placeholder='Add description' id='ev-add'  onChange={this.handleChange}/>
                                </div>
                                <div className='ev-r8'>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2639 2.60898C12.0561 0.401172 8.46076 0.401172 6.25529 2.60898L0.138108 8.72148C0.098264 8.76133 0.0771701 8.81523 0.0771701 8.87148C0.0771701 8.92773 0.098264 8.98164 0.138108 9.02148L1.00295 9.88633C1.04248 9.92569 1.096 9.94778 1.15178 9.94778C1.20756 9.94778 1.26108 9.92569 1.30061 9.88633L7.4178 3.77383C8.17717 3.01445 9.18733 2.59727 10.2608 2.59727C11.3342 2.59727 12.3444 3.01445 13.1014 3.77383C13.8608 4.5332 14.278 5.54336 14.278 6.61445C14.278 7.68789 13.8608 8.6957 13.1014 9.45508L6.86701 15.6871L5.85686 16.6973C4.91233 17.6418 3.37717 17.6418 2.43264 16.6973C1.97561 16.2402 1.72483 15.6332 1.72483 14.9863C1.72483 14.3395 1.97561 13.7324 2.43264 13.2754L8.6178 7.09258C8.77483 6.93789 8.98108 6.85117 9.20139 6.85117H9.20373C9.42405 6.85117 9.62795 6.93789 9.78264 7.09258C9.93967 7.24961 10.024 7.45586 10.024 7.67617C10.024 7.89414 9.93733 8.10039 9.78264 8.25508L4.72717 13.3059C4.68733 13.3457 4.66623 13.3996 4.66623 13.4559C4.66623 13.5121 4.68733 13.566 4.72717 13.6059L5.59201 14.4707C5.63155 14.5101 5.68506 14.5322 5.74084 14.5322C5.79663 14.5322 5.85014 14.5101 5.88967 14.4707L10.9428 9.41758C11.4092 8.95117 11.6647 8.33242 11.6647 7.67383C11.6647 7.01523 11.4069 6.39414 10.9428 5.93008C9.97951 4.9668 8.41389 4.96914 7.45061 5.93008L6.85061 6.53242L1.2678 12.1129C0.888883 12.4896 0.588526 12.9377 0.384144 13.4314C0.179761 13.9251 0.0754195 14.4544 0.0771701 14.9887C0.0771701 16.0738 0.501389 17.0934 1.2678 17.8598C2.06233 18.652 3.10295 19.048 4.14358 19.048C5.1842 19.048 6.22483 18.652 7.01701 17.8598L14.2639 10.6176C15.3303 9.54883 15.9209 8.12617 15.9209 6.61445C15.9233 5.10039 15.3326 3.67773 14.2639 2.60898Z" fill="#919293" /></svg>
                                    <input type="text" name="text" placeholder='Add file' id='ev-add'  onChange={this.handleChange}/>
                                </div>
                                <div className='ev-r9'>
                                    <input type='submit' value="Submit"  className='save-btn'/>
                                </div>
                             </form>   
                            </div>
                        </div>
                    }
                    </div>
                
            </>
        );
    }

}


export default Index;