function Nav() {
  return (
    <div className='max-w-screen border-b border-gray-300'>
      <div className='navbar bg-base-100 flex justify-between max-w-screen-2xl mx-auto'>
        <div className=''>
          <div className='lg:hidden'>
            <div className='dropdown'>
              <div tabIndex={0} role='button' className='btn btn-ghost'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
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
          <a href='/' className='text-2xl font-semibold'>
            Real Estate
          </a>
        </div>
        <div className=' hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a href='/browse'>Browse</a>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className='p-2'>
                  <li>
                    <a>Villa</a>
                  </li>
                  <li>
                    <a>House</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className=' flex gap-4'>
          <div className='hidden md:block'>
            <button className='btn btn-primary'>Create an account</button>
          </div>
          <button className='btn btn-outline'>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
