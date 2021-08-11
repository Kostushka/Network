import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPosts/MyPostContainer';

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo
                profile={props.profile}
                isOwner={props.isOwner}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPostContainer />
        </main>
    );
};
export default Profile;
