import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };
                return <MyPosts updateNewPostTextActionCreator={onPostChange}
                                addPost={addPost}
                                post={state.profilePage.postData}
                                newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>)
}

export default MyPostContainer;
