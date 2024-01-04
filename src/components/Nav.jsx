import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/slices/authSlice';
import { supabase } from '..';

function Nav() {
  const user = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = user.isLoggedIn;

  const handleLogOut = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    }

    dispatch(logOut());
    navigate('/sign-in');
  };

  return (
    <div className='max-w-screen border-b border-gray-300'>
      <div className='navbar bg-base-100 flex justify-between max-w-screen-2xl mx-auto'>
        <div className=''>
          <div className='lg:hidden'>
            <div className='dropdown'>
              <div tabIndex={0} role='button' className='btn btn-ghost'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
                </svg>
              </div>
              <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                <li>
                  <a>Browse</a>
                </li>
                <li>
                  <a>Categories</a>
                  <ul className='p-2'>
                    <li>
                      <a>Villa</a>
                    </li>
                    <li>
                      <a>House</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Create an account</a>
                </li>
              </ul>
            </div>
          </div>
          <Link to='/' className='text-2xl font-semibold'>
            Real Estate
          </Link>
        </div>
        <div className=' hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to='/browse'>Browse</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className='p-2'>
                  <li>
                    <Link to={'/'}>Villa</Link>
                  </li>
                  <li>
                    <Link to={'/'}>House</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to={'/'}>About Us</Link>
            </li>
          </ul>
        </div>

        {isLoggedIn ? (
          <div>
            <div className='dropdown dropdown-end'>
              <div tabIndex={0} role='button' className='btn btn-ghost flex items-center gap-2'>
                <div className='avatar'>
                  <div className='w-10 rounded-full'>
                    <img alt='avatar' src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
                  </div>
                </div>

                <h3 className='hidden sm:inline-block text-sm font-semibold'>{user.userName}</h3>
              </div>

              <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow-lg border bg-base-100 rounded-xl w-52'>
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Create Post</a>
                </li>
                <div className='divider my-0'></div>
                <li onClick={(e) => handleLogOut(e)}>
                  <a>Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className=' flex gap-4'>
            <div className='hidden md:block'>
              <Link to={'/sign-up'} className='btn btn-primary'>
                Create an account
              </Link>
            </div>
            <Link to={'/sign-in'} className='btn btn-outline'>
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
