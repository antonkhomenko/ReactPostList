import {useEffect, useMemo, useRef, useState} from "react";
import React from 'react';
import './style/App.css';
import PostLIst from "./components/PostLIst.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import {usePost} from "./hooks/usePost.js";
import PostService from "./API/PostService.js";
import Loader from "./components/UI/Loader/Loader.jsx";
import useFetching from "./hooks/useFetching.js";
import pages from "./utils/pages.js";
import usePagination from "./hooks/usePagination.js";
import Pagination from "./components/UI/Pagination/Pagination.jsx";


export default function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', searchQuery: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const searchedSortedPosts = usePost(posts, filter.sort, filter.searchQuery);


    const pageArray = usePagination(totalPages);

    const [fetchPost, isPostLoading, postError ] = useFetching(async() => {
        const response =  await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPosts(totalCount);
        setTotalPages(pages(totalCount, limit));
    });


    function addPostToState(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function deletePost(post) {
        setTotalPosts(totalPosts - 1);
        setPosts(posts.filter(p => p.id !== post.id));
    }

    function changePage(pageNumber) {
        setPage(pageNumber);
    }


    useEffect(() => {
        fetchPost();
    }, [filter, page]);



    return (
        <div className='App'>
            <div className='PostHeader'>
                <span className='Posts__counter'>Total posts: {totalPosts}</span>
                <MyButton onClick={() => setModal(true)}>Create post</MyButton>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={addPostToState}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError && <span>Something goes wrong... {postError}</span>}
            {isPostLoading
                ? <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Loader/>
                    <span style={{color: 'gray', marginTop: '10px'}}>Please waite posts is loading</span>
                </div>
                : <PostLIst posts={searchedSortedPosts} title="Posts from jsonplaceholder" remove={deletePost}/>
            }
            <Pagination changePage={changePage} totalPages={totalPages} currentPage={page}/>
        </div>
    )
}