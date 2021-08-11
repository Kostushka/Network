import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import photoUser from '../../assets/images/user.png';
import { useState } from 'react';
import ProfileDataFormReduxForm from './ProfileDataForm';

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />;
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    return (
        <div>
            <div>
                {/*<img src='https://wallpapercave.com/wp/wp2085834.jpg'/>*/}
            </div>
            <div className={s.descBlock}>
                <div>
                    <img
                        src={props.profile.photos.large || photoUser}
                        className={s.mainPhoto}
                    />
                    {props.isOwner && (
                        <input type={'file'} onChange={onMainPhotoSelected} />
                    )}
                </div>
                <div className={s.descBlock}>
                    <ProfileStatusWithHooks
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                </div>

                {editMode ? (
                    <ProfileDataFormReduxForm
                        profile={props.profile}
                        onSubmit={onSubmit}
                        initialValues={props.profile}
                    />
                ) : (
                    <ProfileData
                        profile={props.profile}
                        goToEditMode={() => {
                            setEditMode(true);
                        }}
                        isOwner={props.isOwner}
                    />
                )}
            </div>
        </div>
    );
};
export default ProfileInfo;

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && (
                <button onClick={props.goToEditMode}>edit</button>
            )}
            <div className={s.descBlock}>
                <div>
                    <b>Full name</b>: {props.profile.fullName}
                </div>
                <div>
                    <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                {props.profile.lookingForAJob && (
                    <div>
                        <b>My skills</b>: {props.profile.lookingForAJobDescription}
                    </div>
                )}
                <div>
                    <b>About me</b>: {props.profile.aboutMe}
                </div>
            </div>
            <div className={s.descBlock}>
                <b>Contacts</b>:{' '}
                {Object.keys(props.profile.contacts).map((key) => {
                    return (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={props.profile.contacts[key]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const Contact = (props) => {
    return (
        <div>
            <b>{props.contactTitle}</b>: {props.contactValue}
        </div>
    );
};
