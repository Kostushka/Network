import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://pngpress.com/wp-content/uploads/2020/08/uploads_dragon_dragon_PNG84452.png' />
            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <div>
                        {props.login} -
                        <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={'/login'}>Login</NavLink>
                )}
            </div>
        </header>
    );
};
export default Header;
