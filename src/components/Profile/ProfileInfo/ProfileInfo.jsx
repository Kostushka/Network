import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
      <div>
          <img src='https://wallpapercave.com/wp/wp2085834.jpg' />
          <div className={s.descBlock}>img + desc</div>
      </div>
    );
}
export default ProfileInfo;