import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../store/authContext';
import { useContext } from 'react';

const UserProfile = () => {
  const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout();
    }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
      <Link onClick={logoutHandler} to='/login'>Logout</Link>
    </section>
  );
};

export default UserProfile;
