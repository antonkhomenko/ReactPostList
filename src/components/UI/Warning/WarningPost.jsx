import classes from './WarningPost.module.css';

const WarningPost = () => {
    return (
        <div className={classes.warningPost}>
            <h3>You dont have any post yet or your search term does not match any of the existing posts</h3>
            <p>
                Please use form above to add some post
            </p>
        </div>
    );
};

export default WarningPost;