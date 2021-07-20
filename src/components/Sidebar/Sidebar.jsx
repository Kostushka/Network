import s from './Sidebar.module.css'
import React from "react";

const Sidebar = (props) => {

    const SidebarItem = (props) => {
        return <div>{props.name}</div>
    }

    let sidebarElement = props.sidebar.map((n) => {
        return <SidebarItem name={n.name} key={n.id}/>
    });

    return (
        <div className={s.sidebar}>
            {sidebarElement}
        </div>
    )
}
export default Sidebar;