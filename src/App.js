import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import UserLogin from './components/UserLogin'
import SignUp from './components/SignUp'
import Error from './components/Error'
import {ToastContainer, toast} from "react-toastify";
import AdminLogin from './components/AdminLogin'
import 'react-toastify/dist/ReactToastify.css';


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
        



        {/* USER/PASSENGER OPEARTIONS */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
    
  );
}

export default App