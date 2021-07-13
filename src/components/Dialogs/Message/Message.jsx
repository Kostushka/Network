import s from './Message.module.css';
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";

const Message = (props) => {
    const MessageItem = (props) => {
        return (
            <div>{props.message}</div>
        );
    }

    let messageElements = props.message.map((m) => {
        return <MessageItem message={m.message}/>
    });

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.messages}>
            {messageElements}
            <div>
                <div>
                    <textarea placeholder='Enter text' onChange={onMessageChange} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}
export default Message;