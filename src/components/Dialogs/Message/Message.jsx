import s from './Message.module.css';
import React from "react";

const Message = (props) => {
    const MessageItem = (props) => {
        return (
            <div>{props.message}</div>
        );
    }

    let messageElements = props.message.map((m) => {
        return <MessageItem message={m.message}/>
    });

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }

    return (
        <div className={s.messages}>
            {messageElements}
            <div>
                <div>
                    <textarea placeholder='Enter text' onChange={onMessageChange} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}
export default Message;