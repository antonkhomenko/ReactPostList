import React from 'react';
import classes from './MyTextArea.module.css';

const MyTextArea = React.forwardRef((props,ref) => {
    return (
        <textarea
            {...props}
            cols='10'
            rows='5'
            className={classes.myTextArea}
            ref={ref}
        />
    );
}
);

export default MyTextArea;