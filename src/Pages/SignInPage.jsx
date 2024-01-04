import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import { logIn } from '../redux/slices/authSlice';
import { useState } from 'react';

import { supabase } from '../index';

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();

    const logInRequest = {
      email: inputEmail,
      password: inputPassword,
    };

    const { data, error } = await supabase.auth.signInWithPassword(logInRequest);

    const userInfo = data.user;
    console.log(data);

    dispatch(logIn({ userName: 'Seung Sovannary', userId: userInfo.id, userEmail: userInfo.email }));
    navigate('/');
  };

  return (
    <MainLayout>
      <div className='max-w-screen-2xl mx-auto min-h-[80vh] px-2 flex flex-col justify-center items-center py-10'>
        <h1 className='text-4xl font-semibold'>Sign In</h1>

        <form className='w-full flex flex-col items-center mt-10 gap-5' onSubmit={(e) => handleLogIn(e)}>
          <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Email</span>
            </div>
            <input
              type='email'
              placeholder='Enter your email'
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              className='input input-bordered w-full max-w-lg'
            />
          </label>
          <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Password</span>
            </div>
            <input
              type='password'
              autoComplete='false'
              placeholder='Enter your password'
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className='input input-bordered w-full max-w-lg'
            />
          </label>

          <button type='submit' className='btn btn-primary mt-5'>
            Sign In
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default SignInPage;
