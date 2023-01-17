import classes from './MyInput.module.css';


export default function MyInput(props) {
    
    return (
        <input type="text" {...props} className={classes.myInput}/>
    )
}