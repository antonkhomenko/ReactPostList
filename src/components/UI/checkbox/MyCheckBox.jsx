import classes from './MyCheckBox.module.css';

const MyCheckBox = ({name}) => {


    return (
        <div className={classes.wrapper}>
            <input type="checkbox" id='endless-tape' className={classes.endlessTape__checkbox}/>
            <label htmlFor="endless-tape">{name}</label>
        </div>
    );
};

export default MyCheckBox;