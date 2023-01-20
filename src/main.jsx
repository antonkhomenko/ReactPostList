import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import About from "./pages/About.jsx";
import switchTransition from "react-transition-group/SwitchTransition";
import Loader from "./components/UI/Loader/Loader.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>
    },
    {
        path: '/about',
        element: <About/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider
    router={router}
    redirect='/about'
/>);