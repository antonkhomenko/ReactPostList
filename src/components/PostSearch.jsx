import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton.jsx";

const PostSearch = ({value, onChange}) => {


    return (
        <div className='post'>
            <MyInput placeholder='Search...' value={value} onChange={onChange}/>
        </div>
    );
};

export default PostSearch;