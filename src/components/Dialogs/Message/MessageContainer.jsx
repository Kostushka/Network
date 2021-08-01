import React from "react";
import {addMessageActionCreator} from "../../../redux/dialogs-reducer";
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        message: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Message);