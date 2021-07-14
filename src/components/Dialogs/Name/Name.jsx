import s from './Name.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import StoreContext from "../../../StoreContext";


const Name = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const DialogItem = (props) => {
                    let path = '/dialogs/' + props.id;
                    return (
                        <div className={`${s.dialogsItem} ${s.active}`}>
                            <NavLink activeClassName={s.dialogsItemLink} to={path}>{props.name}</NavLink>
                        </div>
                    );
                }

                let state = store.getState();

                let nameElements = state.dialogsPage.nameData.map((n) => {
                    return <DialogItem name={n.name} id={n.id}/>
                });

                let imgElements = state.dialogsPage.imgData.map((n) => {
                    return <img className={s.imgItems} src={n.img} id={n.id}/>
                });
                return (
                    <div className={s.dialogsItems}>
                        <div>{imgElements}</div>
                        <div>{nameElements}</div>
                    </div>)
            }
            }
        </StoreContext.Consumer>
    );
}
export default Name;