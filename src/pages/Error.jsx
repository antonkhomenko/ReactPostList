import '../style/Error.css'
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className='ErrorPage'>
            <div className="ErrorPage__wrapper">
                <h1 className='ErrorPage__title'>Sorry, but we dont have page for such url 😰</h1>
                <p className='ErrorPage__message'>Please check your url request or go to one of the existing pages</p>
                <div className='ErrorPage__pageList'>
                    <Link to='/' className='ErrorPage__pageList-item'>
                        👉 Posts
                    </Link>
                    <Link to='/about' className='ErrorPage__pageList-item'>
                        👉 About
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;