import PostItem from "./PostItem.jsx";
import WarningPost from "./UI/Warning/WarningPost.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import React from 'react';

const PostLIst = ({posts, title, remove, isLoading}) => {

    if(!posts.length && !isLoading) {
        return <WarningPost/>
    }

    return (
        <div className='PostList'>
            <div className='PostList__header'>
                <span className='PostList__title'>{title}</span>
                <span className='Posts__counter'>
                    Posts on this page: {posts.length}
                </span>
            </div>
            <TransitionGroup>
                {
                    posts.map((p, index) => (
                        <CSSTransition
                            key={p.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem post={p} number={p.id} remove={remove}/>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    );
};

export default PostLIst;