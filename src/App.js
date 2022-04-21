import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import UserLogin from './components/Login'
import SignUp from './components/SignUp'
import Error from './components/Error'
import {ToastContainer, toast} from "react-toastify";
import AdminLogin from './components/AdminLogin'
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import AdminViewFlights from './components/AdminViewFlights';
import UserSearchFlight from './components/UserSearchFlight'


function App() {
  return (
      <>
        <ToastContainer position="top-left"/>
    <BrowserRouter>
      
      <Routes>
        {/* LOGIN AND SIGNUP OPERATIONS */}
        <Route path="/" element={<><Header /><Showcase /><Destinations /><Footer /></>} />
        <Route path="/user/userLogin" element={<><Header /><UserLogin /><Footer /></>}/>
        <Route path="/adminLogin" element={<AdminLogin />}/>
        <Route path="/user/createUser" element={<><Header /><SignUp /><Footer /></>}/>
        <Route path="*" element={<Error />}/>
        {/* ADMIN OPERATIONS */}
        <Route path="/AdminDashboard" element={<AdminDashboard />}/>
        <Route path="/UserDashboard" element={<UserDashboard/>}/>
        <Route path="/viewflights" element={<AdminViewFlights/>}/>
        <Route path="/searchFlight" element={<UserSearchFlight/>}/>
        <Route path = "/flight/allFlight" element = {<AdminViewFlights/>}/>
        {/* USER/PASSENGER OPEARTIONS */}
      </Routes>
    </BrowserRouter>
    </>
  );
}
 
export default App
