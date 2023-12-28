import MainLayout from '../Layouts/MainLayout';

const SignUpPage = () => {
  return (
    <MainLayout>
      <div className='max-w-screen-2xl mx-auto min-h-[80vh] px-2 flex flex-col justify-center items-center py-10'>
        <h1 className='text-4xl font-semibold'>Sign In</h1>

        <form className='w-full flex flex-col items-center mt-10 gap-5'>
          {/* Add new input here */}

          {/* FIRSTNAME */}
          {/* LASTNAME */}
          {/* EMAIL */}
          {/* PASSWORD */}
          {/* PHONE NUMBER */}

          <label className='form-control w-full max-w-lg'>
            <div className='label'>
              <span className='label-text text-xl'>Email</span>
            </div>
            <input type='email' placeholder='Enter your email' className='input input-bordered w-full max-w-lg' />
          </label>
          <label className='form-control w-full max-w-lg'>
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
            Sign In
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default SignUpPage;
