import PostItem from "./PostItem.jsx";
import WarningPost from "./UI/Warning/WarningPost.jsx";

const PostLIst = ({posts, title, remove}) => {

    if(!posts.length) {
        return <WarningPost/>
    }

    return (
        <div className='PostList'>
            <h3>{title}</h3>
            {
                posts.map((p, index) => <PostItem remove={remove}  number={index + 1} post={p} key={p.id}/>)
            }
        </div>
    );
};

export default PostLIst;