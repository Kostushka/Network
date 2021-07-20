import s from './Users.module.css';
import axios from "axios";
import photoUser from '../assets/images/user.png'


let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                props.setUsers(response.data.items);
            });
        }
    }

    // if (props.users.length === 0) {
    //     props.setUsers([
    //             {
    //                 id: 1,
    //                 urlPhoto: 'https://cdn.fishki.net/upload/post/2018/02/10/2508790/c74d3de60a03978f97be933beebe1314.jpg',
    //                 fullName: 'Nastya',
    //                 followed: true,
    //                 status: 'online',
    //                 location: {city: 'Sevastopol', country: 'Russia'}
    //             },
    //             {
    //                 id: 2,
    //                 urlPhoto: 'https://cdn.fishki.net/upload/post/2018/02/10/2508790/c74d3de60a03978f97be933beebe1314.jpg',
    //                 fullName: 'Tanya',
    //                 followed: false,
    //                 status: 'online',
    //                 location: {city: 'Kirovsk', country: 'Russia'}
    //             },
    //             {
    //                 id: 3,
    //                 urlPhoto: 'https://cdn.fishki.net/upload/post/2018/02/10/2508790/c74d3de60a03978f97be933beebe1314.jpg',
    //                 fullName: 'Masha',
    //                 followed: true,
    //                 status: 'offline',
    //                 location: {city: 'Severomorsk', country: 'Russia'}
    //             },
    //         ]
    //     )
    // }

    return (
        <div>
            <button onClick={getUsers} className={s.button}>Get Users</button>
            {props.users.map((u) =>
                <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : photoUser} className={s.urlPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }} className={s.button}>Unfollow</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }} className={s.button}>Follow</button>
                            }
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            {/*<div>{u.location.country}</div>*/}
                            {/*<div>{u.location.city}</div>*/}
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;