import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";




const Profile = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts post={props.post}/>
        </main>
    );
};
export default Profile;
