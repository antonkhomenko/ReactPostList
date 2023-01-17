import {useMemo, useRef, useState} from "react";
import React from 'react';
import './style/App.css';
import PostLIst from "./components/PostLIst.jsx";
import PostForm from "./components/PostForm.jsx";
import WarningPost from "./components/UI/Warning/WarningPost.jsx";
import MySelect from "./components/UI/select/MySelect.jsx";
import PostSearch from "./components/PostSearch.jsx";


export default function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 2, title: 'React', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 3, title: 'Redux', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 4, title: 'TypeScript', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 5, title: 'AAAScript', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    function addPostToState(newPost) {
        setPosts([...posts, newPost]);
    }

    function deletePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    function sortPosts(sortType) {
        setSelectedSort(sortType);
    }

    function getSortedPosts() {
        if(selectedSort) {
            return [...posts].sort((a, b) => {
                return  a[selectedSort].localeCompare(b[selectedSort]);
            });
        } else {
            return posts;
        }
    }

    /*
    * useMemo get 2 parameters
    * 1) callback function
    * 2) array of dependencies
    * When one of dependencies changes callback execute, if dependencies not change
    * use memo get result from cache (previous result)
    *
    * In out case:
    * We get new array of sorted post every time when
    * 1) sort typing change
    * 2) array of posts change (add new post/remove post)
    * */


    const sortedPosts = useMemo(() => {
        return getSortedPosts();
    }, [selectedSort, posts]);

    const searchedSortedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, sortedPosts])

    function searchPost(e) {
        setSearchQuery(e.target.value);
    }


    return (
        <div className='App'>
            <React.StrictMode>
                <PostForm create={addPostToState}/>
                <hr style={{margin: '10px 0'}}/>
                <PostSearch value={searchQuery} onChange={searchPost}/>
                <div className='PostSort-block'>
                   <MySelect
                        options={[
                            {value: 'title', name: 'name'},
                            {value: 'body', name: 'description'},
                        ]}
                        value={selectedSort}
                        onChange={sortPosts}
                        defaultValue='Sort by'
                   />
                </div>

                {searchedSortedPosts.length
                    ? <PostLIst posts={searchedSortedPosts} remove={deletePost} title='Posts List'/>
                    : <WarningPost/>
                }
            </React.StrictMode>
        </div>
    )
}