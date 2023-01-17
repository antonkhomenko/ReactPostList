import classes from './DeleteButton.module.css';

const DeleteButton = (props) => {
    return (
        <button className={classes.deleteBtn} {...props}>
            Delete
        </button>
    );
};

export default DeleteButton;