import {useEffect, useMemo, useRef, useState} from "react";
import React from 'react';
import './style/App.css';
import PostLIst from "./components/PostLIst.jsx";
import PostForm from "./components/PostForm.jsx";
import WarningPost from "./components/UI/Warning/WarningPost.jsx";
import MySelect from "./components/UI/select/MySelect.jsx";
import PostSearch from "./components/PostSearch.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import {usePost} from "./hooks/usePost.js";
import axios from "axios";
import PostService from "./API/PostService.js";


export default function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', searchQuery: ''});
    const [modal, setModal] = useState(false);
    const searchedSortedPosts = usePost(posts, filter.sort, filter.searchQuery);

    function addPostToState(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function deletePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    async function fetchPosts() {
        const posts =  await PostService.getAll();
        setPosts(posts);
    }


    useEffect(() => {
        fetchPosts();
    }, [filter]);

    return (
        <div className='App'>
            <div className='PostHeader'>
                <span className='PostHeader__counter'>Posts: {posts.length}</span>
                <MyButton onClick={() => setModal(true)}>Create post</MyButton>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={addPostToState}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostLIst posts={searchedSortedPosts} remove={deletePost} title='Posts List'/>
        </div>
    )
}