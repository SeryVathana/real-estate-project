import { MoveRight } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';

function Homepage() {
  return (
    <MainLayout>
      <div>
        <div className='max-w-screen-2xl mx-auto px-2 flex flex-col justify-center items-center py-20'>
          <h1 className=' text-5xl font-semibold text-center max-w-[700px] leading-tight'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nam.
          </h1>
          <p className='text-center text-xl text-gray-500 max-w-[700px] mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis, magni animi sint,
            accusamus molestias quas reiciendis atque, itaque assumenda eum aut suscipit modi labore
            corporis numquam debitis recusandae optio.
          </p>

          <div className='flex gap-10 mt-10'>
            <a href='/' className='btn btn-primary'>
              Join Us
            </a>
            <a href='/' className='btn btn-ghost'>
              <span>Browse more</span>
              <MoveRight className='mt-0.5' />
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Homepage;
