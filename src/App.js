import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// common pages
import Login from "./components/Pages/Common/Login"
import Signup from "./components/Pages/Common/Signup"
import Roles from "./components/Pages/Common/Roles"
import Verify from "./components/Pages/Common/Verify"
import Notavailable from "./components/Pages/Common/404"
import Newpassword from "./components/Pages/Common/Newpassword"
import Resetpassword from "./components/Pages/Common/Resetpassword"
// Student Pages
import Dashboard from "./components/Pages/StudentPages/Dashboard"
import MyWork from "./components/Pages/StudentPages/MyWork"
import Goals from "./components/Pages/StudentPages/Goals"
import Newprofile from "./components/Pages/StudentPages/Createprofile"
import Sendinvites from "./components/Pages/StudentPages/SendInvites"
import Plans from "./components/Pages/StudentPages/Plans"
import MyNetwork from "./components/Pages/StudentPages/MyNetwork"
import SelectAdvisor from "./components/Pages/StudentPages/AdvisorPages/SelectAdvisor"
import Schedule from "./components/Pages/StudentPages/Schedule"
import SelectFriend from "./components/Pages/StudentPages/SelectFriend"
import StudentNewplans from "./components/Pages/StudentPages/Plans/StudentNewplans"
import FeedbackAdvisor from "./components/Pages/StudentPages/FeedbackAdvisor"
// Advisor pages
import NewPlan from "./components/Pages/AdvisorPages/Plan/NewPlan"
import PhaseOne from "./components/Pages/AdvisorPages/Plan/PhaseOne"
import AdvisorDashboard from "./components/Pages/AdvisorPages/Dashboard"
class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        

                        {/* Common Routes */}
                        <Route path="/" element={<Login />} />
                        <Route path="/Signup" element={<Signup />} />
                        <Route path="/Verify" element={<Verify />} />
                        <Route path="/Newpassword" element={<Newpassword/>} />
                        <Route path="/Resetpassword" element={<Resetpassword/>} />
                        <Route path="/Notavailable" element={<Notavailable/>} />
                        {/* Student Routes */}
                        <Route path="/Roles" element={<Roles />} />
                        <Route path="/Goals" element={<Goals />} />
                        <Route path="/SelectAdvisor" element={<SelectAdvisor />} />  
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/MyWork" element={<MyWork />} />
                        <Route path="/Newprofile" element={<Newprofile />} />
                        <Route path="/Sendinvites" element={<Sendinvites />} />
                        <Route path="/Plans" element={<Plans />} />
                        <Route path="/MyNetwork" element={<MyNetwork/>} />
                        <Route path="/Schedule" element={<Schedule/>} />
                        <Route path="/SelectFriend" element={<SelectFriend />} />
                        <Route path="/StudentNewplans" element={<StudentNewplans />} />
                        <Route path="/FeedbackAdvisor" element={<FeedbackAdvisor />} />


                        {/* Advisor Routes */}
                        <Route path="/advisor/dashboard" element={<AdvisorDashboard />} />
                        <Route path="/advisor/new-plan" element={<NewPlan />} />
                        <Route path="/advisor/phase-one" element={<PhaseOne />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default App;