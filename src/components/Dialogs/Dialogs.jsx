import s from './Dialogs.module.css'
import NameContainer from "./Name/NameContainer";
import MessageContainer from "./Message/MessageContainer";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <NameContainer/>
            <MessageContainer/>
        </div>
    );
}
export default Dialogs;