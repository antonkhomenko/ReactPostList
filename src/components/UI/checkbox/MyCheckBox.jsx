import classes from './MyCheckBox.module.css';
import {useContext} from "react";
import {TapeContext} from "../../../context/context.js";

const MyCheckBox = ({name}) => {

    const {isInfinityTape, setIsInfinityTape} = useContext(TapeContext);

    return (
            <div className={classes.wrapper}>
                <input type="checkbox" id='endless-tape' className={classes.endlessTape__checkbox} onChange={(e) => setIsInfinityTape(e.target.checked)}/>
                <label htmlFor="endless-tape">{name}</label>
            </div>
    );
};

export default MyCheckBox;