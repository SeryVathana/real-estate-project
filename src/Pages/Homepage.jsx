import { MoveRight } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';

function Homepage() {
  return (
    <MainLayout>
      <div>
        <div className='max-w-screen-2xl mx-auto px-2 flex flex-col justify-center items-center py-20'>
          <h1 className=' text-5xl font-semibold text-center max-w-[700px] leading-tight'>
            FIND YOUR DREAM HOME
          </h1>
          <p className='text-center text-xl text-gray-500 max-w-[700px] mt-5'>
            If you're looking for a place where you can be yourself, don't give up. Keep searching
            until you find a place that feels like home
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
