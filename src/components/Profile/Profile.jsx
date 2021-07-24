import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";




const Profile = (props) => {
    return (
        <main>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </main>
    )
}
export default Profile;
