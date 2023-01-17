import {useRef, useState} from "react";
import React from 'react';
import './style/App.css';
import PostItem from "./components/PostItem.jsx";
import PostLIst from "./components/PostLIst.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";
import MyTextArea from "./components/UI/textarea/MyTextArea.jsx";
import PostForm from "./components/PostForm.jsx";
import WarningPost from "./components/UI/Warning/WarningPost.jsx";


export default function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 2, title: 'React', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 3, title: 'Redux', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 4, title: 'TypeScript', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
    ]);


    function addPostToState(newPost) {
        setPosts([...posts, newPost]);
    }

    function deletePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className='App'>
            <React.StrictMode>
                <PostForm create={addPostToState}/>
                {posts.length !== 0
                    ? <PostLIst posts={posts} remove={deletePost} title='Posts List'/>
                    : <WarningPost/>
                }
            </React.StrictMode>
        </div>
    )
}