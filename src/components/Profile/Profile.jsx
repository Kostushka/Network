import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";




const Profile = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPostContainer/>
        </main>
    )
}
export default Profile;
