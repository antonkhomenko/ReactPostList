import DeleteButton from "./UI/button/DeleteButton.jsx";

export default function PostItem(props) {

    return (
        <div className='Post'>
            <div className='Post__content'>
                <h3 className='Post__title'>{props.number}. {props.post.title}</h3>
                <article className='Post__text'>
                    {props.post.body}
                </article>
            </div>
            <DeleteButton onClick={() => props.remove(props.post)}/>
        </div>
    );
}