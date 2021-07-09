import s from './Name.module.css';
import {NavLink} from "react-router-dom";
import React from "react";


const Name = (props) => {

    const DialogItem = (props) => {
        let path = '/dialogs/' + props.id;
        return (
            <div className={`${s.dialogsItem} ${s.active}`}>
                <NavLink activeClassName={s.dialogsItemLink} to={path}>{props.name}</NavLink>
            </div>
        );
    }

    let nameElements = props.name.nameData.map((n) => {
        return <DialogItem name={n.name} id={n.id}/>
    });

    let imgElements = props.name.imgData.map((n) => {
        return <img className={s.imgItems} src={n.img} id={n.id}/>
    });

    return (
        <div className={s.dialogsItems}>
            <div>{imgElements}</div>
            <div>{nameElements}</div>
        </div>
    );
}
export default Name;