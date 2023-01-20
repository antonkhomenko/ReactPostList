import classes from './WarningPost.module.css';

const WarningPost = () => {
    return (
        <div className={classes.warningPost}>
            <h3>You have no posts</h3>
            <p>
                You don't have a post, or your search term doesn't match any existing posts.
                Please use the create post button to create posts.
            </p>
        </div>
    );
};

export default WarningPost;