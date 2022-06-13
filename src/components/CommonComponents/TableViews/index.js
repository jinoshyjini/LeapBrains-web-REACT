import React, { Component } from "react";
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tileView: this.props.tileView,
            listView: this.props.listView
        };
    }
    componentWillMount() {
        let {tileView,listView} = this.state;
    }
    handleClicktableViews(e,tableViews,Viewmode){
        e.preventDefault()
        let {tileView,listView} = this.state;
        if(tableViews){
            this.setState({
                tileView:true,
                listView:false
            })
        } else {
            this.setState({
                tileView:false,
                listView:true
            })
        }
        this.props.handletableViews(Viewmode)
    }
    render() { 
        let {tileView,listView} = this.state;
        return (
            <>      
                <ul className="tableViews text-end">
                    <li className="tableViews__list">
                        <a href="#" onClick={(e) => this.handleClicktableViews(e,true,'tileView')}  className={tileView ? "tableViews__list__tileView active" : "tableViews__list__tileView"}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 4.5H4.5V10.5H10.5V4.5Z" stroke="#1B1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.5 4.5H13.5V10.5H19.5V4.5Z" stroke="#1B1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.5 13.5H4.5V19.5H10.5V13.5Z" stroke="#1B1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.5 13.5H13.5V19.5H19.5V13.5Z" stroke="#1B1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </li>
                    <li className="tableViews__list">
                        <a href="#" onClick={(e) => this.handleClicktableViews(e,false,'listView')}  className={listView ? "tableViews__list__listView active" : "tableViews__list__listView"}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 12H20.25" stroke="#1B1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.75 6H20.25" stroke="#1B1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.75 18H20.25" stroke="#1B1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </>
        )
    }
}
export default Index;