import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
    let postElements = props.post.map((p) => {
        return <Post message={p.message} likeCount={p.likeCount} id={p.id} key={p.id}/>
    });

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextActionCreator(text);
    };

    return (
        <div className={s.postsBlock}>
            <h1>My post</h1>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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
