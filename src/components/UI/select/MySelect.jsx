import React from "react";
import classes from './MySelect.module.css';


const MySelect = ({options, value, onChange, defaultValue}) => {
    return (
        <select
            className={classes.mySelect}
            value={value}
            onChange={onChange}
        >
            <option disabled>{defaultValue}</option>
            {options.map(o =>
                <option value={o.value} key={o.value}>
                    {o.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;