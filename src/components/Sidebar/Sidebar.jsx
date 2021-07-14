import s from './Sidebar.module.css'
import React from "react";

const Sidebar = (props) => {

    let sidebarElement = props.sidebar.map((n) => {
        return <div>{n.name}</div>
    });

    return (
        <div className={s.sidebar}>
            {sidebarElement}
        </div>
    )
}
export default Sidebar;