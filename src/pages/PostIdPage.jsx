import {useNavigate, useParams} from "react-router-dom";
import PostService from "../API/PostService.js";
import useFetching from "../hooks/useFetching.js";
import {useEffect, useState} from "react";
import MyButton from "../components/UI/button/MyButton.jsx";
import React from 'react';
import CommentItem from "../components/CommentItem.jsx";
import Loader from "../components/UI/Loader/Loader.jsx";

const PostIdPage = () => {
    const param = useParams();
    const navigation = useNavigate();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);


    const [fetching, isPostLoading, postError] = useFetching(async() => {
        const response = await PostService.getById(param.id);
        setPost(response.data);
    });

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getComments(param.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetching();
        fetchComments();
    }, []);




    return (
        <div className='PostPage'>
            <div className='PostPage__wrapper'>
                <div className='PostPage__navigation'>
                    <MyButton onClick={() => navigation('/posts')}>⬅ Back</MyButton>
                </div>
                {isPostLoading
                    ? <Loader/>
                    : <>
                        <h3 className='PostPage__title'>
                    <span className='PostPage__id'>
                        {post.id}
                    </span>

                            {post.title}
                        </h3>
                        <p className='PostPage__body'>
                            {post.body}
                        </p>
                    </>
                }
                {isCommentsLoading
                    ? <Loader/>
                    : <div className='PostPage__commentsBlock'>
                        <div className='PostPage__commentHeader'>
                            <h1>Comments</h1>
                            <span className='PostPage__commentsCounter'>
                            Comments amount: {comments.length}
                        </span>
                        </div>
                        {comments.map(c => {
                            return <CommentItem comment={c} key={c.id}/>
                        })}
                    </div>
                }
            </div>
        </div>
    );
};

export default PostIdPage;