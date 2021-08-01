import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postElements = props.post.map((p) => {
        return <Post message={p.message} likeCount={p.likeCount} id={p.id} key={p.id}/>
    });


    let addNewPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h1>My post</h1>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                <div>
                    {postElements}
                </div>
            </div>
        </div>
    );
};

const maxLength10 = maxLengthCreator(10);
const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder='say hello' validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm({form: 'addNewPostForm'})(addNewPostForm);

export default MyPosts;
