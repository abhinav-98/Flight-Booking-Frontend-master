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
      <Header />
      <Routes>
        {/* LOGIN AND SIGNUP OPERATIONS */}
        <Route path="/" element={<><Showcase /><Destinations /></>} />
        <Route path="/user/userLogin" element={<UserLogin />}/>
        <Route path="/adminLogin" element={<AdminLogin />}/>
        <Route path="/user/createUser" element={<SignUp />}/>
        <Route path="*" element={<Error />}/>
        {/* ADMIN OPERATIONS */}
        <Route path="/AdminDashboard" element={<AdminDashboard />}/>
        <Route path="/UserDashboard" element={<UserDashboard/>}/>
        <Route path="/viewflights" element={<AdminViewFlights/>}/>
        <Route path="/searchFlight" element={<UserSearchFlight/>}/>
        {/* USER/PASSENGER OPEARTIONS */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}
 
export default App
