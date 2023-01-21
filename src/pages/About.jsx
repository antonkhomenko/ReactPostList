import React from 'react';
import '../style/About.css';
import arrow from '../assets/arrow-icon.svg';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className='AboutPage'>
            <Link className='AboutBackBtn' to='/posts'>
                <img src={arrow} alt="arrow-icon"/>
            </Link>
            <div className="AboutPage__wrapper">
                <h3 className='AboutPage__title'>
                    <span className='AboutPage__emoji'>👋</span>
                    About
                </h3>
                <div className='About__content'>
                    <div className="About__user">
                        <img
                            src="https://avatars.githubusercontent.com/u/40213913?v=4"
                            alt="user-img"
                            className='About__user-img'
                        />
                        <a
                            href="https://github.com/antonkhomenko"
                            className='About__user-name'
                        >
                            Anton Khomenko
                        </a>
                    </div>
                    <div className='About__content-text'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nulla omnis vel. Alias aperiam assumenda consectetur cum fugit illum impedit laboriosam magnam nihil non numquam obcaecati optio, possimus quas, quos rem repudiandae sed vero. At debitis doloribus eos est facere fuga ipsam ipsum minima odio officiis omnis perspiciatis quam qui quibusdam quis quos, ratione similique soluta suscipit tempore voluptas voluptates!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;