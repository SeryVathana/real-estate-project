// import { useParams } from 'react-router-dom';

import { BedSingle, MapPin } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';

const ItemDetailPage = () => {
  //   const itemId = useParams();

  return (
    <MainLayout>
      <div className='max-w-screen-xl mx-auto min-h-[80vh] px-2 flex flex-col py-10'>
        <div className='w-full flex justify-between'>
          <div>
            <h1 className='text-3xl'>Boutique Space in Greenville</h1>
            <div className='flex items-center gap-2 mt-1 text-gray-500'>
              <MapPin className='w-5 h-5' />
              <p className='text-md'>Toul Kork, Phnom Penh</p>
            </div>
          </div>
          <div>
            <h1 className='text-3xl'>$14,500</h1>
          </div>
        </div>

        <div className='grid grid-cols-12 h-[500px] gap-5 mt-5'>
          <div className=' col-span-6 h-full overflow-hidden'>
            <img
              src='https://media.onthemarket.com/properties/8592075/1428251558/image-0-480x320.jpg'
              alt='ji'
              className='h-full w-full object-cover rounded-xl'
            />
          </div>
          <div className=' col-span-3'>
            <img
              src='https://media.onthemarket.com/properties/8592075/1428251558/image-0-480x320.jpg'
              alt='ji'
              className='h-full w-full object-cover rounded-xl'
            />
          </div>
          <div className=' col-span-3 flex flex-col gap-5'>
            <div className='h-1/2'>
              <img
                src='https://media.onthemarket.com/properties/8592075/1428251558/image-0-480x320.jpg'
                alt='ji'
                className='h-full w-full object-cover rounded-xl'
              />
            </div>
            <div className='h-1/2 relative  rounded-xl overflow-hidden'>
              <img
                src='https://media.onthemarket.com/properties/8592075/1428251558/image-0-480x320.jpg'
                alt='ji'
                className='h-full w-full object-cover'
              />
              <div className=' absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center'>
                <p className='text-xl text-white'>View More</p>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-12 mt-10 gap-5'>
          <div className='border rounded-lg col-span-8 p-5'>
            <h3 className='text-xl font-semibold'>Overview</h3>

            <div className='grid grid-cols-12 mt-3 gap-5'>
              <div className='flex items-center gap-2 text-gray-500 col-span-3'>
                <BedSingle className='w-10 h-10 p-2.5 bg-gray-200 rounded-md' />
                <p className='text-lg'>3 Bedroom</p>
              </div>
              <div className='flex items-center gap-2 text-gray-500 col-span-3'>
                <BedSingle className='w-10 h-10 p-2.5 bg-gray-200 rounded-md' />
                <p className='text-lg'>3 Bedroom</p>
              </div>
              <div className='flex items-center gap-2 text-gray-500 col-span-3'>
                <BedSingle className='w-10 h-10 p-2.5 bg-gray-200 rounded-md' />
                <p className='text-lg'>3 Bedroom</p>
              </div>
              <div className='flex items-center gap-2 text-gray-500 col-span-3'>
                <BedSingle className='w-10 h-10 p-2.5 bg-gray-200 rounded-md' />
                <p className='text-lg'>3 Bedroom</p>
              </div>
              <div className='flex items-center gap-2 text-gray-500 col-span-3'>
                <BedSingle className='w-10 h-10 p-2.5 bg-gray-200 rounded-md' />
                <p className='text-lg'>3 Bedroom</p>
              </div>
              <div className='flex items-center gap-2 text-gray-500 col-span-3'>
                <BedSingle className='w-10 h-10 p-2.5 bg-gray-200 rounded-md' />
                <p className='text-lg'>3 Bedroom</p>
              </div>
              <div className='flex items-center gap-2 text-gray-500 col-span-3'>
                <BedSingle className='w-10 h-10 p-2.5 bg-gray-200 rounded-md' />
                <p className='text-lg'>3 Bedroom</p>
              </div>
            </div>
          </div>
          <div className='border rounded-lg col-span-4'>2</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ItemDetailPage;
