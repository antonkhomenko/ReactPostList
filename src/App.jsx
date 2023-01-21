import React, {useContext, useEffect, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Post from "./pages/Post";
import About from "./pages/About.jsx";
import PostIdPage from "./pages/PostIdPage.jsx";
import {IsAuth} from "./context/context.js";
import Error from "./pages/Error.jsx";

const App = () => {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, []);


    return (
        <IsAuth.Provider value={{
            isAuth,
            setIsAuth,
        }}>
            {!isAuth
            ? <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='*' element={<Navigate to='/login' replace/>} />
                </Routes>
                : <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/posts' element={<Post/>}/>
                    <Route path='/posts/:id' element={<PostIdPage/>}/>
                    <Route path='/about' element={<About/>} exact={true}/>
                </Routes>
            }

        </IsAuth.Provider>
    );
};

export default App;