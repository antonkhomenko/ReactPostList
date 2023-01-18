import React from 'react';
import PostSearch from "./PostSearch.jsx";
import MySelect from "./UI/select/MySelect.jsx";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <PostSearch value={filter.searchQuery} onChange={(e) => setFilter({...filter, searchQuery: e.target.value})}/>
            <div className='PostSort-block'>
                <MySelect
                    options={[
                        {value: 'title', name: 'name'},
                        {value: 'body', name: 'description'},
                    ]}
                    value={filter.sort}
                    onChange={(e) => setFilter({...filter, sort: e.target.value})}
                    defaultValue='Sort by'
                />
            </div>
        </div>
    );
};

export default PostFilter;