import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";


const MyPosts = (props) => {

    let postElements = props.post.map((p) => {
        return <Post message={p.message} likeCount={p.likeCount} id={p.id}/>
    });

    return (
        <div className={s.postsBlock}>
            <h1>My post</h1>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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
