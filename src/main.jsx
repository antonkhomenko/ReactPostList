import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    redirect,
    Route,
    RouterProvider
} from "react-router-dom";
import About from "./pages/About.jsx";
import switchTransition from "react-transition-group/SwitchTransition";
import Loader from "./components/UI/Loader/Loader.jsx";
import Error from "./pages/Error.jsx";
import PostIdPage from "./pages/PostIdPage.jsx";
import Login from "./pages/Login.jsx";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</React.StrictMode>);