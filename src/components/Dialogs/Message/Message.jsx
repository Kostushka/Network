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

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.messages}>
            {messageElements}
            <div>
                <div>
                    <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}
export default Message;