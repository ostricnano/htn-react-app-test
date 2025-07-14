import profileImage from "@assets/img/profile-img.png";
import changeImage from "@assets/icons/change-image-icon.png";
import styles from './profile-img.module.css'

const ProfileImageContainer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.ProfileImageContainer}>
          <img src={profileImage} alt="profile image" />
        </div>
      <button className={styles.changeImageButton}>
        <img className={styles.changeImageIcon} src={changeImage} />
      </button>
    </div>
  );
};

export default ProfileImageContainer;
