import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import Message from "./Message";
import StoreContext from "../../../StoreContext";

const MessageContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }
                return <Message addMessage={addMessage}
                                onMessageChange={onMessageChange}
                                message={state.dialogsPage.messageData}
                                newMessageText={state.dialogsPage.newMessageText}/>
            }
            }
        </StoreContext.Consumer>)
}

export default MessageContainer;