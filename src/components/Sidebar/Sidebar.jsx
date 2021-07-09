import s from './Sidebar.module.css'

const Sidebar = (props) => {


    let sidebarElement = props.state.friends.map((n) => {
        return <div>{n.name}</div>
    });

    return (
        <div className={s.sidebar}>
            {sidebarElement}
        </div>
    )
}
export default Sidebar;