import React from "react";

const CommentItem = ({comment}) => {
    return (
            <div className='PostPage__commentsItem'>
                <div className='commentsItem__header'>
                            <span className='commentsItem__id'>
                                {comment.id}
                            </span>
                    <span className='commentsItem__name'>
                                {comment.name}
                            </span>
                </div>
                <div className='commentsItem__email'>
                    <span>Email:</span> {comment.name}
                </div>
                <p className='commentsItem__body'>
                    {comment.body}
                </p>
            </div>
    );
};

export default CommentItem;