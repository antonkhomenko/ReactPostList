import classes from './MyInput.module.css';


export default function MyInput( props) {
    
    return (
        <input type={props.type} {...props} className={classes.myInput}/>
    )
}