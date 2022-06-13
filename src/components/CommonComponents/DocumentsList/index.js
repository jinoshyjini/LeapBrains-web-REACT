import React, { Component } from "react";
import ModalPopup from "../ModalPopup"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            show: false
        };
    }
    componentWillMount() {
        
    }
    CircleUserAddCtaAction(){
        console.log("click Circle Add user Cta btn")
    }
    handleShow(e) {
        e.preventDefault()
        this.setState({ show: true })
    }
    setShow(isshow) {
        console.log(isshow)
        this.setState({ show: isshow })
    }
    render() { 
        let { DocumentsListData, DocumentsListTitle, DocumentsListSubTitle, DocumentsModalPopupData } = this.props;
        
        var DocumentsListDataList = DocumentsListData  && DocumentsListData.map((element,key) => {    
            return (
                <div className="DocumentsList__List__items">
                    <div className="row m-0">
                        <div className="col-2 p-0 ">
                            <div className={element.DocumentExtension + " DocumentsList__List__items__Extension"} >
                                {element.DocumentExtension}
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="">
                                <h2 className="DocumentsList__List__items__title">{element.DocumentName}</h2>
                                <p className="DocumentsList__List__items__sub-title_date">{element.DocumentDate} - {element.DocumentTime} </p>
                            </div>
                        </div>
                    </div>
                </div>
            )      
        });

        return (
            <>      
                {DocumentsListData && DocumentsListData.length > 0 &&
                    
                    <div>
                        <h2 className="GetAdvisors__title">
                            {DocumentsListTitle}
                            <a href="javascript:void(0)" onClick={(e) => this.handleShow(e)} className="main-content__cta cta--underline">See all</a>
                            {this.state.show &&
                                <ModalPopup
                                    size="lg"
                                    dialogClassName="document-popup"
                                    fullscreen={true}
                                    centered={false}
                                    show={this.state.show}
                                    ModalPopupData={DocumentsModalPopupData}
                                    onsetShow={(isshow) => this.setShow(isshow)}
                                    tileView={true}
                                    listView={false}
                                    noofBoxinrow={4}
                                    showSearch={true}
                                    showTableView={true}
                                    isDocumentPage={true}
                                />
                            }
                        </h2>
                        <p className="GetAdvisors__sub-title">{DocumentsListSubTitle}</p>
                        
                        <div className="GetAdvisors__List">
                            {DocumentsListDataList}
                        </div>
                    </div>
                }
                
            </>
        )
    }
}
export default Index;