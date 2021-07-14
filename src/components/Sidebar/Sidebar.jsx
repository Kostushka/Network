import s from './Sidebar.module.css'
import StoreContext from "../../StoreContext";

const Sidebar = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let sidebarElement = state.sidebar.friends.map((n) => {
                    return <div>{n.name}</div>
                });

                return (
                    <div className={s.sidebar}>
                        {sidebarElement}
                    </div>)
            }
            }
        </StoreContext.Consumer>
    )
}
export default Sidebar;