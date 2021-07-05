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

    return (
        <div className={s.messages}>
            {messageElements}
        </div>
    );
}
export default Message;