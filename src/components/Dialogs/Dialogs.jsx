import s from './Dialogs.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <Name name={props.state}/>
            <Message message={props.state.messageData} newMessageText={props.state.newMessageText} dispatch={props.dispatch}/>
        </div>
    );
}
export default Dialogs;