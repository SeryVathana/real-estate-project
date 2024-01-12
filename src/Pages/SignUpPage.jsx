import { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebaseconfig';
import { doc, setDoc } from 'firebase/firestore';

const SignUpPage = () => {
  const [inputFirstName, setInputFirstName] = useState('');
  const [inputLastName, setInputLastName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');
  const [inputRole, setInputRole] = useState('default');

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (inputRole === 'default') {
      console.log('Please select role');
      return;
    }

    const signUpDatabaseRequest = {
      firstName: inputFirstName,
      lastName: inputLastName,
      email: inputEmail,
      phoneNumber: inputPhoneNumber,
      pfURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
      role: inputRole,
    };

    console.log(signUpDatabaseRequest);

    const newUser = await createUserWithEmailAndPassword(auth, inputEmail, inputPassword);

    console.log(newUser.user.uid);

    const newUserDB = await setDoc(doc(db, 'users', newUser.user.uid), {
      email: newUser.user.email,
      firstName: inputFirstName,
      lastName: inputLastName,
      phoneNumber: inputPhoneNumber,
      pfURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
      role: inputRole,
      createdAt: new Date(Date.now()).toISOString(),
    });

    console.log(newUserDB);
  };

  return (
    <MainLayout>
      <div className='max-w-screen-2xl mx-auto min-h-[80vh] px-2 flex flex-col justify-center items-center py-10'>
        <h1 className='text-4xl font-semibold'>Sign Up</h1>

        <form className='w-full flex flex-col items-center mt-10 gap-5' onSubmit={(e) => handleSignUp(e)}>
          <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Firstname</span>
            </div>
            <input
              type='text'
              placeholder='Enter your firstname'
              value={inputFirstName}
              onChange={(e) => setInputFirstName(e.target.value)}
              className='input input-bordered w-full max-w-lg'
            />
          </label>
          <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Lastname</span>
            </div>
            <input
              type='text'
              placeholder='Enter your lastname'
              value={inputLastName}
              onChange={(e) => setInputLastName(e.target.value)}
              className='input input-bordered w-full max-w-lg'
            />
          </label>
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
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder='Enter your password'
              className='input input-bordered w-full max-w-lg'
            />
          </label>

          <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Phone Number</span>
            </div>
            <input
              type='number'
              placeholder='Enter your phone number'
              value={inputPhoneNumber}
              onChange={(e) => setInputPhoneNumber(e.target.value)}
              className='input input-bordered w-full max-w-lg'
            />
          </label>

          <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Role</span>
            </div>
            <select
              className='select select-bordered w-full max-w-xs'
              defaultValue={'default'}
              // value={inputRole}
              onChange={(e) => setInputRole(e.target.value)}
            >
              <option disabled value={'default'}>
                Please select user role
              </option>
              <option value={'buyer'}>Buyer</option>
              <option value={'seller'}>Seller</option>
            </select>
          </label>

          <button type='submit' className='btn btn-primary mt-5'>
            Sign up
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default SignUpPage;
