import { useState, useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import classes from './AuthForm.module.css';
import UserInfo from '../Profile/UserInfo';

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const auth = getAuth();

  const submitHandler = (event) => {

    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let method;
    if (isLogin) {
      //if logging in 
       method = signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
       method.then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const adminUid = "1f8QNb1Y8HV1JGQWx0JdFCbiOlv2";
        if(user.uid == adminUid){
          // navigate("/adminProfile");
          // navigate('/adminProfile')
          navigate('/profile')
        }else{
        navigate('/profile')
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("signed out")
        navigate('/login')
        // ..
      })

    } else {
      //if signing up
       method = createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword);
       method.then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("signed in")
        navigate('/user-info')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("signed out")
        navigate('/login')
        // ..
      })
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;