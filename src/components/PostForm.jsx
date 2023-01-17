import MyInput from "./UI/input/MyInput.jsx";
import MyTextArea from "./UI/textarea/MyTextArea.jsx";
import MyButton from "./UI/button/MyButton.jsx";
import React, {useRef, useState} from "react";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: ''});
    const bodyInputRef = useRef();

    function addNewPost(e) {
        e.preventDefault();
        const postBody = bodyInputRef.current.value;

        if(post.title.trim() === '' || postBody.trim() === '') {
            alert('dont try to add empty post');
            return;
        }

        const newPost = {
            title: post.title,
            body: postBody,
            id: Date.now(),
        }

        create(newPost);

        setPost({title: ""})
        bodyInputRef.current.value = '';

    }

    return (
        <form action="#" className='PostForm'>
            <MyInput
                type="text"
                placeholder='Post title...'
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyTextArea
                placeholder='Post...'
                ref={bodyInputRef}
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;