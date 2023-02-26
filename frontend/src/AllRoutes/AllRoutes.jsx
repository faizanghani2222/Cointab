import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Userdetails from './Userdetails';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/userdetails" element={<Userdetails/>}/>
        </Routes>
    );
}

export default AllRoutes;