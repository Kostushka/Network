import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts post={props.state.postData} newPostText={props.state.newPostText} dispatch={props.dispatch}/>
        </main>
    );
};
export default Profile;
