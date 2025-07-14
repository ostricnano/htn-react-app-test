import ProfileImageContainer from '@components/account/profile-img/profile-img'
import ProfileAccountForm from '@components/forms/profile-account-form'
import styles from './profile.module.css'
const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <ProfileImageContainer /> 
      <ProfileAccountForm />
    </div>
  )
}

export default Profile
