import photoUser from '../assets/images/user.png';
import s from './User.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

let User = (props) => {
    return (
        <div>
            <div>
                <NavLink to={'/profile/' + props.user.id}>
                    <img
                        src={
                            props.user.photos.small != null
                                ? props.user.photos.small
                                : photoUser
                        }
                        className={s.urlPhoto}
                    />
                </NavLink>
            </div>
            <div>
                {props.user.followed ? (
                    <button
                        disabled={props.followingInProgress.some(
                            (id) => id === props.user.id
                        )}
                        onClick={() => {
                            props.unfollow(props.user.id);
                        }}
                        className={s.button}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        disabled={props.followingInProgress.some(
                            (id) => id === props.user.id
                        )}
                        onClick={() => {
                            props.follow(props.user.id);
                        }}
                        className={s.button}
                    >
                        Follow
                    </button>
                )}
            </div>
            <div>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </div>
            <div>
                {/*<div>{props.user.location.country}</div>*/}
                {/*<div>{props.user.location.city}</div>*/}
            </div>
        </div>
    );
};

export default User;
