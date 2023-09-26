import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';
import NavBar1 from '../Pages/NavBar/NavBar1';

const Main = () => {
    return (
        <div>
            <NavBar1></NavBar1>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;