import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        post: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
