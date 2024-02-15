import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Coman-compo/Navbar';
import Home from "./Component/Home"
import Registration from './Component/Registraion';
import Login from './Component/Login';

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /><Registration /></>
    },
    {
        path: "/home",
        element: <><Navbar /><Home /></>
    },
    {
        path: "/regisration",
        element: <><Navbar /><Registration /></>
    },
    {
        path: "/login",
        element: <><Navbar /><Login /></>
    }
])

export default Mainrouter;