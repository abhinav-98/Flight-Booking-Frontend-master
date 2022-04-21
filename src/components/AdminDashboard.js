import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';

function AdminDashboard() {

    return (

        <>
            <Navbar />
            <Route path='/welcome' element={<Home />} />
            {/* <Route path='/reports' element={Reports} />
            <Route path='/products' element={Products} /> */}

        </>

    );
}

export default AdminDashboard;