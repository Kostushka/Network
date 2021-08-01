import s from './Message.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from '../../common/FormsControls/FormsControls'


const Message = (props) => {
    const MessageItem = (props) => {
        return (
            <div>{props.message}</div>
        );
    }

    let messageElements = props.message.map((m) => {
        return <MessageItem message={m.message} key={m.id}/>
    });

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={s.messages}>
            {messageElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter text' name='newMessageText' component={Textarea} validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Message;

