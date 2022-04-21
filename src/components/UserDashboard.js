import React from 'react';
import UserNavbar from './UserNavbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';

function UserDashboard() {

    return (

        <>
            <UserNavbar />
            {/* <Route path='/welcome' element={<Home />} /> */}
            <h1>Welcome to User Panel</h1>
            {/* <Route path='/reports' element={Reports} />
            <Route path='/products' element={Products} /> */}

        </>

    );
}

export default UserDashboard;