import React from 'react';
import PostSearch from "./PostSearch.jsx";
import MySelect from "./UI/select/MySelect.jsx";
import MyCheckBox from "./UI/checkbox/MyCheckBox.jsx";

const PostFilter = ({filter, setFilter, changeLimit}) => {
    return (
        <div>
            <PostSearch value={filter.searchQuery} onChange={(e) => setFilter({...filter, searchQuery: e.target.value})}/>
            <div className='PostSort-block'>
                <div className='PosSort-block__wrapper'>
                    <MyCheckBox name='Endless Tape'/>
                    <div className='PostSort__selects'>
                        <MySelect
                            options={[
                                {value: 'title', name: 'name'},
                                {value: 'body', name: 'description'},
                            ]}
                            value={filter.sort}
                            onChange={(e) => setFilter({...filter, sort: e.target.value})}
                            defaultValue='Sort by'
                        />
                        <MySelect
                            options={[
                                {value: '10', name: '10'},
                                {value: '15', name: '15'},
                                {value: '20', name: '20'},
                                {value: '-1', name: 'all'},
                            ]}
                            defaultValue='Show posts: '
                            onChange={(e) => changeLimit(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostFilter;