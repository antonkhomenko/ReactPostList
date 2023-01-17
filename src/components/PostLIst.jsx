import PostItem from "./PostItem.jsx";

const PostLIst = ({posts, title, remove}) => {
    return (
        <div className='PostList'>
            <h2>{title}</h2>
            {posts.map((item, index) => <PostItem  remove={remove} number={index + 1} post={item} key={item.id}/>)}
        </div>
    );
};

export default PostLIst;