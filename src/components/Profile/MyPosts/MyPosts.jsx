import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";


const MyPosts = (props) => {
    let postElements = props.post.map((p) => {
        return <Post message={p.message} likeCount={p.likeCount} id={p.id}/>
    });

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h1>My post</h1>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <div>
                    {postElements}
                </div>
            </div>
        </div>
    );
};
export default MyPosts;
