import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import { getAuth, signOut } from "firebase/auth";

const UserProfile = () => {

  const signOutHandler = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("user signed out")
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
      
  }

  return (
    <section className={classes.profile}>
      <h2>Welcome Please Fill Out The Information</h2>
      {/* <ProfileForm /> get rid of this soon */}
      <UserInfo />
      <Link onClick={signOutHandler} to='/login'>Logout</Link>
    </section>
  );
};

export default UserProfile;
