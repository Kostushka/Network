import s from './Dialogs.module.css'
import Name from "./Name/Name";
import MessageContainer from "./Message/MessageContainer";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <Name/>
            <MessageContainer/>
        </div>
    );
}
export default Dialogs;