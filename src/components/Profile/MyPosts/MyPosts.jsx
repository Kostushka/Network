import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let postElements = props.post.map((p) => {
        return <Post message={p.message} likeCount={p.likeCount} id={p.id}/>
    });

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
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
