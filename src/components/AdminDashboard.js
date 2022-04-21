import React from 'react';
import AdminNavbar from './AdminNavbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';

function AdminDashboard() {

    return (

        <>
            <AdminNavbar />
            {/* <Route path='/welcome' element={<Home />} /> */}
            {/* <Route path='/reports' element={Reports} />
            <Route path='/products' element={Products} /> */}
            <h1>Welcome to Admin Panel</h1>

        </>

    );
}

export default AdminDashboard;