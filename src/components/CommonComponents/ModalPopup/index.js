import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Search from "../Search";
import TableViews from "../TableViews";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:this.props.show,
            isTileView:true,
            isListView:false
        };
        this.handletableViews = this.handletableViews.bind(this);
        this.setShow = this.setShow.bind(this)
    }
    componentWillMount() {
        let { ModalPopupData } = this.props;
    }

    setShow(){
        this.setState({show:false})
        this.props.onsetShow(false)
    }

    handletableViews(Viewmode){
        let isTileView = "";
        let isListView = "";
        if(Viewmode == "tileView"){
            isTileView=true;
            isListView=false;
        } else {
            isTileView=false;
            isListView=true;
        }
        this.setState({
            isTileView:isTileView,
            isListView:isListView
        })
    }
    
    render() { 
        let { show,isTileView,isListView } = this.state;
        let { ModalPopupData,fullscreen,centered,size,dialogClassName,tileView,listView,noofBoxinrow,isDocumentPage } = this.props;
        let noofBoxclass = ""
        if(noofBoxinrow == 2){
            noofBoxclass = "col-sm-6"
        } else if(noofBoxinrow == 3){
            noofBoxclass = "col-sm-4"
        } else if(noofBoxinrow == 4){
            noofBoxclass = "col-sm-3"
        } else if(noofBoxinrow == 5){
            noofBoxclass = "col"
        } else if(noofBoxinrow == 6){
            noofBoxclass = "col-sm-2"
        }

        var DocumentsListDataList = "";
        if(isDocumentPage){
            DocumentsListDataList = ModalPopupData && ModalPopupData[0].DocumentsModalData.length > 0 && ModalPopupData[0].DocumentsModalData.map((element,key) => {    
                return (
                    <div className={noofBoxclass + " ps-0 mb-3"}>
                        <div className="DocumentsList__List__items tileview">
                            <div className="row m-0 mb-3">
                                <div className="col-2 p-0 ">
                                    <div className={element.DocumentExtension + " DocumentsList__List__items__Extension"} >
                                        {element.DocumentExtension}
                                    </div>
                                </div>
                                <div className="col-10 p-0 text-end">
                                    <a href="">
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.41406 3.3125C1.76216 3.3125 2.096 3.17422 2.34214 2.92808C2.58828 2.68194 2.72656 2.3481 2.72656 2C2.72656 1.6519 2.58828 1.31806 2.34214 1.07192C2.096 0.825781 1.76216 0.6875 1.41406 0.6875C1.06597 0.6875 0.732126 0.825781 0.485985 1.07192C0.239843 1.31806 0.101563 1.6519 0.101563 2C0.101563 2.3481 0.239843 2.68194 0.485985 2.92808C0.732126 3.17422 1.06597 3.3125 1.41406 3.3125ZM7.97656 3.3125C8.32466 3.3125 8.6585 3.17422 8.90464 2.92808C9.15078 2.68194 9.28906 2.3481 9.28906 2C9.28906 1.6519 9.15078 1.31806 8.90464 1.07192C8.6585 0.825781 8.32466 0.6875 7.97656 0.6875C7.62847 0.6875 7.29463 0.825781 7.04848 1.07192C6.80234 1.31806 6.66406 1.6519 6.66406 2C6.66406 2.3481 6.80234 2.68194 7.04848 2.92808C7.29463 3.17422 7.62847 3.3125 7.97656 3.3125ZM14.5391 3.3125C14.8872 3.3125 15.221 3.17422 15.4671 2.92808C15.7133 2.68194 15.8516 2.3481 15.8516 2C15.8516 1.6519 15.7133 1.31806 15.4671 1.07192C15.221 0.825781 14.8872 0.6875 14.5391 0.6875C14.191 0.6875 13.8571 0.825781 13.611 1.07192C13.3648 1.31806 13.2266 1.6519 13.2266 2C13.2266 2.3481 13.3648 2.68194 13.611 2.92808C13.8571 3.17422 14.191 3.3125 14.5391 3.3125Z" fill="#1B1C1E"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="row m-0 mb-3">
                                <div className="col-12 p-0">
                                    <div className="">
                                        <h2 className="DocumentsList__List__items__title">{element.DocumentName}</h2>
                                        <p className="DocumentsList__List__items__sub-title_date">{element.DocumentDate} - {element.DocumentTime} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0 mb-3">
                                <div className="col-12 p-0">
                                    <div className="">
                                        <h2 className="DocumentsList__List__items__sub-title_date">Last Updated:</h2>
                                        <p className="DocumentsList__List__items__sub-title_date black">{element.LastUpdated}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0 mb-3">
                                <div className="col-12 p-0">
                                    <div className="">
                                        <h2 className="DocumentsList__List__items__sub-title_date">Description:</h2>
                                        <p className="DocumentsList__List__items__sub-title_date black">{element.Description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col-6 p-0">
                                    <div className="fileSize">
                                        <span>{element.fileSize}</span>
                                    </div>
                                </div>
                                <div className="col-6 p-0 text-end">
                                    <div className="">
                                        <a href="">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.46875 9.28125C0.59307 9.28125 0.712299 9.33064 0.800206 9.41854C0.888114 9.50645 0.9375 9.62568 0.9375 9.75V12.0938C0.9375 12.3424 1.03627 12.5808 1.21209 12.7567C1.3879 12.9325 1.62636 13.0312 1.875 13.0312H13.125C13.3736 13.0312 13.6121 12.9325 13.7879 12.7567C13.9637 12.5808 14.0625 12.3424 14.0625 12.0938V9.75C14.0625 9.62568 14.1119 9.50645 14.1998 9.41854C14.2877 9.33064 14.4069 9.28125 14.5312 9.28125C14.6556 9.28125 14.7748 9.33064 14.8627 9.41854C14.9506 9.50645 15 9.62568 15 9.75V12.0938C15 12.591 14.8025 13.0679 14.4508 13.4196C14.0992 13.7712 13.6223 13.9688 13.125 13.9688H1.875C1.37772 13.9688 0.900806 13.7712 0.549175 13.4196C0.197544 13.0679 0 12.591 0 12.0938V9.75C0 9.62568 0.049386 9.50645 0.137294 9.41854C0.225201 9.33064 0.34443 9.28125 0.46875 9.28125Z" fill="#303F9F"/>
                                            <path d="M7.16823 11.1131C7.21177 11.1568 7.2635 11.1914 7.32045 11.215C7.3774 11.2387 7.43845 11.2508 7.5001 11.2508C7.56176 11.2508 7.62281 11.2387 7.67976 11.215C7.73671 11.1914 7.78844 11.1568 7.83198 11.1131L10.6445 8.30062C10.7325 8.21261 10.7819 8.09323 10.7819 7.96875C10.7819 7.84427 10.7325 7.72489 10.6445 7.63687C10.5565 7.54886 10.4371 7.49941 10.3126 7.49941C10.1881 7.49941 10.0687 7.54886 9.98073 7.63687L7.96885 9.64969V1.40625C7.96885 1.28193 7.91947 1.1627 7.83156 1.07479C7.74365 0.986886 7.62442 0.9375 7.5001 0.9375C7.37578 0.9375 7.25656 0.986886 7.16865 1.07479C7.08074 1.1627 7.03135 1.28193 7.03135 1.40625V9.64969L5.01948 7.63687C4.93146 7.54886 4.81208 7.49941 4.6876 7.49941C4.56313 7.49941 4.44375 7.54886 4.35573 7.63687C4.26771 7.72489 4.21826 7.84427 4.21826 7.96875C4.21826 8.09323 4.26771 8.21261 4.35573 8.30062L7.16823 11.1131Z" fill="#303F9F"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )      
            });
        }
        
        return (
            <>
                <Modal 
                    size={size ? size : 'sm'}
                    show={show ? show : false} 
                    fullscreen={fullscreen ? fullscreen : false} 
                    onHide={(e) => this.setShow()}
                    centered={centered}
                    dialogClassName={dialogClassName ? dialogClassName : ""}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M26.6665 16.0003C26.6665 15.2639 26.0696 14.667 25.3332 14.667H6.66651C5.93012 14.667 5.33317 15.2639 5.33317 16.0003C5.33317 16.7367 5.93012 17.3337 6.66651 17.3337H25.3332C26.0696 17.3337 26.6665 16.7367 26.6665 16.0003Z" fill="#1B1C1E"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.943 5.72353C16.4223 5.20283 15.5781 5.20283 15.0574 5.72353L5.72402 15.0569C5.20332 15.5776 5.20332 16.4218 5.72402 16.9425L15.0574 26.2758C15.5781 26.7965 16.4223 26.7965 16.943 26.2758C17.4637 25.7551 17.4637 24.9109 16.943 24.3902L8.55245 15.9997L16.943 7.60915C17.4637 7.08845 17.4637 6.24423 16.943 5.72353Z" fill="#1B1C1E"/>
                            </svg>
                            {ModalPopupData[0].popuptitle}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row m-0">
                            <div className="col-sm-8 p-0">
                                <div className="row m-0">
                                    <div className="col-sm-10 p-0">
                                        {this.props.showSearch &&
                                            <Search />
                                        }
                                    </div>
                                    <div className="col-sm-2">
                                        {this.props.showTableView &&
                                            <TableViews 
                                                tileView={tileView }
                                                listView={listView }
                                                handletableViews={this.handletableViews}
                                            />
                                        }
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="col-sm-12 p-0">
                                        {isTileView ?
                                            <div className="row m-0">
                                                {DocumentsListDataList}
                                            </div>
                                            :
                                            <div className="row m-0">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Last Updated</th>
                                                            <th>Description</th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="row">
                                                                    <div className="col-sm-2">
                                                                        <div className={"fileExtension doc" } >
                                                                            doc
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-10 fileExtension-desc">
                                                                        <p>Cambridge.doc</p>
                                                                        <p>1 October, 2021 -  12:38</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>13 hours ago</td>
                                                            <td>This is the document you should use for the 1 milestone...</td>
                                                            <td>
                                                                <div className="fileSize">
                                                                    <span>{"2.3 MB"}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="">
                                                                    <a href="">
                                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0.46875 9.28125C0.59307 9.28125 0.712299 9.33064 0.800206 9.41854C0.888114 9.50645 0.9375 9.62568 0.9375 9.75V12.0938C0.9375 12.3424 1.03627 12.5808 1.21209 12.7567C1.3879 12.9325 1.62636 13.0312 1.875 13.0312H13.125C13.3736 13.0312 13.6121 12.9325 13.7879 12.7567C13.9637 12.5808 14.0625 12.3424 14.0625 12.0938V9.75C14.0625 9.62568 14.1119 9.50645 14.1998 9.41854C14.2877 9.33064 14.4069 9.28125 14.5312 9.28125C14.6556 9.28125 14.7748 9.33064 14.8627 9.41854C14.9506 9.50645 15 9.62568 15 9.75V12.0938C15 12.591 14.8025 13.0679 14.4508 13.4196C14.0992 13.7712 13.6223 13.9688 13.125 13.9688H1.875C1.37772 13.9688 0.900806 13.7712 0.549175 13.4196C0.197544 13.0679 0 12.591 0 12.0938V9.75C0 9.62568 0.049386 9.50645 0.137294 9.41854C0.225201 9.33064 0.34443 9.28125 0.46875 9.28125Z" fill="#303F9F"/>
                                                                        <path d="M7.16823 11.1131C7.21177 11.1568 7.2635 11.1914 7.32045 11.215C7.3774 11.2387 7.43845 11.2508 7.5001 11.2508C7.56176 11.2508 7.62281 11.2387 7.67976 11.215C7.73671 11.1914 7.78844 11.1568 7.83198 11.1131L10.6445 8.30062C10.7325 8.21261 10.7819 8.09323 10.7819 7.96875C10.7819 7.84427 10.7325 7.72489 10.6445 7.63687C10.5565 7.54886 10.4371 7.49941 10.3126 7.49941C10.1881 7.49941 10.0687 7.54886 9.98073 7.63687L7.96885 9.64969V1.40625C7.96885 1.28193 7.91947 1.1627 7.83156 1.07479C7.74365 0.986886 7.62442 0.9375 7.5001 0.9375C7.37578 0.9375 7.25656 0.986886 7.16865 1.07479C7.08074 1.1627 7.03135 1.28193 7.03135 1.40625V9.64969L5.01948 7.63687C4.93146 7.54886 4.81208 7.49941 4.6876 7.49941C4.56313 7.49941 4.44375 7.54886 4.35573 7.63687C4.26771 7.72489 4.21826 7.84427 4.21826 7.96875C4.21826 8.09323 4.26771 8.21261 4.35573 8.30062L7.16823 11.1131Z" fill="#303F9F"/>
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="">
                                                                    <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.41406 3.3125C1.76216 3.3125 2.096 3.17422 2.34214 2.92808C2.58828 2.68194 2.72656 2.3481 2.72656 2C2.72656 1.6519 2.58828 1.31806 2.34214 1.07192C2.096 0.825781 1.76216 0.6875 1.41406 0.6875C1.06597 0.6875 0.732126 0.825781 0.485985 1.07192C0.239843 1.31806 0.101563 1.6519 0.101563 2C0.101563 2.3481 0.239843 2.68194 0.485985 2.92808C0.732126 3.17422 1.06597 3.3125 1.41406 3.3125ZM7.97656 3.3125C8.32466 3.3125 8.6585 3.17422 8.90464 2.92808C9.15078 2.68194 9.28906 2.3481 9.28906 2C9.28906 1.6519 9.15078 1.31806 8.90464 1.07192C8.6585 0.825781 8.32466 0.6875 7.97656 0.6875C7.62847 0.6875 7.29463 0.825781 7.04848 1.07192C6.80234 1.31806 6.66406 1.6519 6.66406 2C6.66406 2.3481 6.80234 2.68194 7.04848 2.92808C7.29463 3.17422 7.62847 3.3125 7.97656 3.3125ZM14.5391 3.3125C14.8872 3.3125 15.221 3.17422 15.4671 2.92808C15.7133 2.68194 15.8516 2.3481 15.8516 2C15.8516 1.6519 15.7133 1.31806 15.4671 1.07192C15.221 0.825781 14.8872 0.6875 14.5391 0.6875C14.191 0.6875 13.8571 0.825781 13.611 1.07192C13.3648 1.31806 13.2266 1.6519 13.2266 2C13.2266 2.3481 13.3648 2.68194 13.611 2.92808C13.8571 3.17422 14.191 3.3125 14.5391 3.3125Z" fill="#1B1C1E"/>
                                                                    </svg>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
export default Index;
