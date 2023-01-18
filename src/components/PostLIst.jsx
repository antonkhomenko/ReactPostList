import PostItem from "./PostItem.jsx";
import WarningPost from "./UI/Warning/WarningPost.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import React from 'react';

const PostLIst = ({posts, title, remove}) => {

    if(!posts.length) {
        return <WarningPost/>
    }

    return (
        <div className='PostList'>
            <h3>{title}</h3>
            <TransitionGroup>
                {
                    posts.map((p, index) => (
                        <CSSTransition
                            key={p.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem post={p} number={index + 1} remove={remove}/>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    );
};

export default PostLIst;