import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {Redirect} from 'react-router-dom';




const Profile = (props) => {
    return (
        <main>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </main>
    )
}
export default Profile;
