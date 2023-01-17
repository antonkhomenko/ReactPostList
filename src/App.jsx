import {useRef, useState} from "react";
import React from 'react';
import './style/App.css';
import PostLIst from "./components/PostLIst.jsx";
import PostForm from "./components/PostForm.jsx";
import WarningPost from "./components/UI/Warning/WarningPost.jsx";
import MySelect from "./components/UI/select/MySelect.jsx";


export default function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 2, title: 'React', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 3, title: 'Redux', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 4, title: 'TypeScript', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
        {id: 5, title: 'AAAScript', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda consequatur corporis et fugiat illo, inventore iusto minus natus nobis nostrum optio provident quis quo repudiandae saepe sed voluptatum. Officiis.'},
    ]);
    const [selectedSort, setSelectedSort] = useState('testingState');

    function addPostToState(newPost) {
        setPosts([...posts, newPost]);
    }

    function deletePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    function sortPosts(sortType) {
        setSelectedSort(sortType);
        let sortedPosts = [...posts].sort((a, b) => {
            return  a[sortType].localeCompare(b[sortType]);
        });
        setPosts(sortedPosts);
    }

    return (
        <div className='App'>
            <React.StrictMode>
                <PostForm create={addPostToState}/>
                <hr style={{margin: '10px 0'}}/>
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

                {posts.length
                    ? <PostLIst posts={posts} remove={deletePost} title='Posts List'/>
                    : <WarningPost/>
                }
            </React.StrictMode>
        </div>
    )
}