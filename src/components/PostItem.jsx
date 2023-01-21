import DeleteButton from "./UI/button/DeleteButton.jsx";
import React from 'react';
import MyButton from "./UI/button/MyButton.jsx";
import {useNavigate} from 'react-router-dom';

export default function  PostItem(props) {
    const navigate = useNavigate();
    return (
        <div className='Post'>
            <div className='Post__content'>
                <h3 className='Post__title'>{props.number}. {props.post.title}</h3>
                <article className='Post__text'>
                    {props.post.body}
                </article>
            </div>
            <div className='Post__button-wrapper'>
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Open post</MyButton>
                <DeleteButton onClick={() => props.remove(props.post)}/>
            </div>
        </div>
    );
}