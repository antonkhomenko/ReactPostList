import React, {useEffect, useRef, useState} from "react";
import '../style/App.css';
import PostLIst from "../components/PostLIst.jsx";
import PostForm from "../components/PostForm.jsx";
import PostFilter from "../components/PostFilter.jsx";
import MyModal from "../components/UI/MyModal/MyModal.jsx";
import MyButton from "../components/UI/button/MyButton.jsx";
import {usePost} from "../hooks/usePost.js";
import PostService from "../API/PostService.js";
import Loader from "../components/UI/Loader/Loader.jsx";
import useFetching from "../hooks/useFetching.js";
import pages from "../utils/pages.js";
import usePagination from "../hooks/usePagination.js";
import Pagination from "../components/UI/Pagination/Pagination.jsx";
import arrow from '../assets/arrow-right.svg';
import {Link} from "react-router-dom";
import {TapeContext} from "../context/context.js";
import {useObserver} from "../hooks/useObserver.js";


export default function Post() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', searchQuery: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [isInfinityTape, setIsInfinityTape] = useState(false);


    const searchedSortedPosts = usePost(posts, filter.sort, filter.searchQuery);


    const pageArray = usePagination(totalPages);

    const lastElement = useRef();

    const [fetchPost, isPostLoading, postError ] = useFetching(async() => {
        const response =  await PostService.getAll(limit, page);
        if(isInfinityTape) {
            setPosts([...posts, ...response.data])
        } else {
            setPosts(response.data);
        }
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
    }, [page, limit]);



    useObserver(lastElement, () => setPage(page + 1),
        isPostLoading, isInfinityTape, (isInfinityTape && page < totalPages)
    );



    function changeTotalPost() {
        setTotalPosts(prev => +prev + 1);
    }

    function changeEndlessPage(e) {
        setIsInfinityTape(e.target.checked);
        if(!e.target.checked) {
            setLimit(10);
            setPage(1);
        }
    }

    return (
        <TapeContext.Provider
            value={{
                isInfinityTape,
                setIsInfinityTape: changeEndlessPage,
            }}>
            <div className='App'>
                <Link className='App__nextPageBtn' to='/about'>
                    <img src={arrow} alt="arrow-icon"/>
                </Link>
                <div className='PostHeader'>
                    <span className='Posts__counter'>Total posts: {totalPosts}</span>
                    <MyButton onClick={() => setModal(true)}>Create post</MyButton>
                </div>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm
                        create={addPostToState}
                        changeTotal={changeTotalPost}
                        total={totalPosts}
                    />
                </MyModal>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                    changeLimit={setLimit}
                />
                {postError && <span>Something goes wrong... {postError}</span>}

                {isPostLoading
                    && <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Loader/>
                        <span style={{color: 'gray', marginTop: '10px'}}>Please waite posts is loading</span>
                    </div>
                }
                <PostLIst isLoading={isPostLoading} posts={searchedSortedPosts} title="Posts from jsonplaceholder" remove={deletePost}/>
                <div style={{height: '10px', marginTop: '5px'}} ref={lastElement}>
                </div>
                {!isInfinityTape &&  <Pagination changePage={changePage} totalPages={totalPages} currentPage={page}/>}
            </div>
        </TapeContext.Provider>
    )
}