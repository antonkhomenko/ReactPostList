import classes from './MyButton.module.css';

const MyButton = ({children, addClass,...props}) => {
    return (
        <button className={[classes.myButton, addClass].join(' ')} {...props}>
            {children}
        </button>
    );
};

export default MyButton;