import s from './Dialogs.module.css'
import Name from "./Name/Name";
import Message from "./Message/Message";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <Name name={props.name}/>
            <Message message={props.message}/>
        </div>
    );
}
export default Dialogs;