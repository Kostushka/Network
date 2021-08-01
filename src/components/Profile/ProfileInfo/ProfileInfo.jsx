import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img src='https://wallpapercave.com/wp/wp2085834.jpg'/>*/}
            </div>
            <div className={s.descBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div className={s.descBlock}>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                </div>
                <div className={s.descBlock}>
                    <span className={s.mainInfo}>My contacts:</span>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.github}</div>
                </div>
                <div className={s.descBlock}>
                    <span className={s.mainInfo}>lookingForAJob:</span>
                    <div>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>

    );
}
export default ProfileInfo;