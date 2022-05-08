import React from 'react';
import './SocialLogin.css';
import google from '../../Images/logo/download-removebg-preview.png';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }

      if(user){
        navigate('/home');
      }

      if (loading) {
        return <p>Loading...</p>;
      }



    return (
        <div>
            <hr />
            <div>
                <button onClick={() => signInWithGoogle()}  className='google'>
                    <img src={google} alt="" />
                    Google Signin
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;