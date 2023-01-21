import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import '../style/Login.css';
import MyButton from "../components/UI/button/MyButton.jsx";
import {IsAuth} from "../context/context";
import {Link} from "react-router-dom";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(IsAuth);


    function login(e) {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    function logout() {
        localStorage.removeItem('auth');
        setIsAuth(false);
    }

    return (

            <div className='Login'>
                <nav className='Login__nav'>
                    <div className="Login__nav-wrapper">
                        {isAuth &&
                            <>
                                <Link to='/posts' className='Login__nav-link'>
                                    👉 Posts
                                </Link>
                                <Link to='/about' className='Login__nav-link'>
                                    👉 About
                                </Link>
                                <MyButton onClick={logout}>Logout</MyButton>
                            </>
                        }
                    </div>
                </nav>
                <div className="Login__wrapper">
                    <h1 className='Login__title'>Please login 🥺</h1>
                    <form action="#" className='Login__form'>
                        <div className='Login__login-block'>
                            <span>Login: </span>
                            <MyInput placeholder='Login...'></MyInput>
                        </div>
                        <div className='Login__passw-block'>
                            <span>Password: </span>
                            <MyInput placeholder='Password...' type='password'></MyInput>
                        </div>
                        <MyButton onClick={(e) => login(e)}>Login</MyButton>
                        {isAuth && <span style={{color: '#71d957', marginLeft: '60px'}}>You successfully login</span>}
                    </form>
                </div>
            </div>

    );
};

export default Login;