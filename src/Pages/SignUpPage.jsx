import MainLayout from '../Layouts/MainLayout';

const SignUpPage = () => {
  return (
    <MainLayout>
      <div className='max-w-screen-2xl mx-auto min-h-[80vh] px-2 flex flex-col justify-center items-center py-10'>
        <h1 className='text-4xl font-semibold'>Sign Up</h1>

        <form className='w-full flex flex-col items-center mt-10 gap-5'>
        <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Firstname</span>
            </div>
            <input type='firstname' placeholder='Enter your firstname' className='input input-bordered w-full max-w-lg' />
          </label>
          <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Lastname</span>
            </div>
            <input type='lastname' placeholder='Enter your lastname' className='input input-bordered w-full max-w-lg' />
          </label>
          <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Email</span>
            </div>
            <input type='email' placeholder='Enter your email' className='input input-bordered w-full max-w-lg' />
          </label>
          <label className='form-control w-full max-w-lg'>

          <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Phone Number</span>
            </div>
            <input type='phone' placeholder='Enter your phone number' className='input input-bordered w-full max-w-lg' />
          </label>

            <div className='label'>
              <span className='label-text text-xl'>Password</span>
            </div>
            <input
              type='password'
              autoComplete='false'
              placeholder='Enter your password'
              className='input input-bordered w-full max-w-lg'
            />
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
