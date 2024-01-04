import { useParams } from 'react-router-dom';

import { BedSingle, MapPin, PhoneCall, Star, StarHalf } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';

import data from '../data/mock-data.json';

const ItemDetailPage = () => {
  const itemId = useParams();
  const newData = data.filter((eachData) => eachData.id === Number(itemId.id))[0];

  console.log(newData);

  return (
    <MainLayout>
      <div className='max-w-screen-xl mx-auto min-h-[80vh] px-2 flex flex-col py-10'>
        {/* TITLE */}
        <div className='w-full flex justify-between'>
          <div>
            <h1 className='text-3xl'>{newData.itemName}</h1>
            <div className='flex items-center gap-2 mt-1 text-gray-500'>
              <MapPin className='w-5 h-5' />
              <p className='text-md'>{newData.details.location.join(', ')}</p>
            </div>
          </div>
          <div>
            <h1 className='text-3xl'>${newData.price.toLocaleString()}</h1>
          </div>
        </div>

        {/* IMAGES */}
        <div className='grid grid-cols-12 h-[500px] gap-5 mt-5'>
          <div className=' col-span-6 h-full overflow-hidden'>
            <img src={newData.displayImage} alt='ji' className='h-full w-full object-cover rounded-xl' />
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

        {/* Info section */}
        <div className='grid grid-cols-12 mt-10 gap-5'>
          {/* OVERVIEW */}
          <div className='border rounded-lg col-span-8 p-5 space-y-10'>
            <div>
              <h3 className='text-xl font-semibold'>Overview</h3>

              <div className='grid grid-cols-12 mt-5 gap-5'>
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

            <div>
              <h3 className='text-xl font-semibold'>Description</h3>
              <p className='mt-5 text-lg text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur quidem voluptate voluptas,
                molestiae odit optio, excepturi porro est, dolorum totam doloremque. Similique quaerat natus eveniet dolore
                voluptas! Placeat, voluptate perferendis atque, nisi nihil autem laboriosam porro quam vitae aliquid similique
                magnam numquam itaque minus illo corporis maxime vero fugit.
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className='border rounded-lg col-span-4 p-5 row-span-3'>
            <h3 className='text-xl font-semibold'>Contact</h3>

            <div className='mt-5 flex items-center gap-5'>
              <div className='avatar'>
                <div className='w-20 rounded-full'>
                  <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' alt='test' />
                </div>
              </div>

              <div className='space-y-2'>
                <h3 className='text-xl font-semibold'>Seung sovannary</h3>
                <p className='flex gap-3'>
                  <span>
                    <PhoneCall className='w-5' />
                  </span>
                  <span>0974874231</span>
                </p>
              </div>
            </div>

            <form className='w-full flex flex-col items-center mt-10 gap-5'>
              <label className='form-control w-full max-w-lg'>
                <div className='label'>
                  <span className='label-text text-xl'>Full name</span>
                </div>
                <input type='firstname' placeholder='Enter your full name' className='input input-bordered w-full max-w-lg' />
              </label>

              <label className='form-control w-full max-w-lg'>
                <div className='label'>
                  <span className='label-text text-xl'>Email</span>
                </div>
                <input type='email' placeholder='Enter your email' className='input input-bordered w-full max-w-lg' />
              </label>

              <label className='form-control w-full max-w-lg'>
                <div className='label'>
                  <span className='label-text text-xl'>Phone Number</span>
                </div>
                <input type='number' placeholder='Enter your phone number' className='input input-bordered w-full max-w-lg' />
              </label>

              <label className='form-control w-full'>
                <div className='label'>
                  <span className='label-text text-xl'>Messages</span>
                </div>
                <textarea className='textarea textarea-bordered h-24' placeholder='Write your messages here'></textarea>
              </label>

              <button type='submit' className='btn btn-primary w-full'>
                Send Messages
              </button>
            </form>
          </div>

          {/* DETAIL */}
          <div className='border rounded-lg col-span-8 p-5'>
            <h3 className='text-xl font-semibold'>Details</h3>

            <div className='grid grid-cols-3 mt-5 gap-y-3'>
              <div className='flex gap-2'>
                <p className=' font-semibold'>Example 1:</p>
                <p className='text-gray-500'>example</p>
              </div>
              <div className='flex gap-2'>
                <p className=' font-semibold'>Example 1:</p>
                <p className='text-gray-500'>example</p>
              </div>
              <div className='flex gap-2'>
                <p className=' font-semibold'>Example 1:</p>
                <p className='text-gray-500'>example</p>
              </div>
              <div className='flex gap-2'>
                <p className=' font-semibold'>Example 1:</p>
                <p className='text-gray-500'>example</p>
              </div>
              <div className='flex gap-2'>
                <p className=' font-semibold'>Example 1:</p>
                <p className='text-gray-500'>example</p>
              </div>
              <div className='flex gap-2'>
                <p className=' font-semibold'>Example 1:</p>
                <p className='text-gray-500'>example</p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className='border rounded-lg col-span-8 p-5'></div>

          {/* Customer Reviews */}
          <div className='border rounded-lg col-span-8 p-5'>
            <h3 className='text-xl font-semibold'>Customer Reviews</h3>

            <div className='mt-5'>
              <div className='border p-2 rounded-md bg-gray-50 flex flex-col'>
                <div className='flex items-center gap-5'>
                  <h1 className='text-lg font-semibold'>seung sovannary</h1>
                  <div className='flex gap-2'>
                    <Star className='w-5 text-yellow-500' />
                    <Star className='w-5 text-yellow-500' />
                    <Star className='w-5 text-yellow-500' />
                    <Star className='w-5 text-yellow-500' />
                    <StarHalf className='w-5 text-yellow-500' />
                  </div>
                </div>

                <p className='text-gray-500'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quidem nam mollitia natus quae tenetur, quod
                  obcaecati suscipit totam sequi rem ut reprehenderit repellendus quibusdam assumenda ducimus, quis nisi quam!
                </p>

                <div className='flex gap-2 self-end'>
                  <button className='btn btn-sm btn-success'>Show</button>
                  <button className='btn btn-sm btn-error'>Hide</button>
                </div>
              </div>
            </div>
          </div>

          {/* POST REVIEW */}
          <div className='border rounded-lg col-span-4 p-5 h-fit'>
            <h3 className='text-xl font-semibold'>Post a review</h3>
            <form className='w-full flex flex-col items-center mt-2 gap-5'>
              <label className='form-control w-full'>
                <textarea className='textarea textarea-bordered h-24' placeholder='Write your messages here'></textarea>
              </label>
              <div className='flex justify-between items-center w-full'>
                <div className='flex'>
                  <Star className='w-8 ' />
                  <Star className='w-8 ' />
                  <Star className='w-8 ' />
                  <Star className='w-8 ' />
                  <Star className='w-8 ' />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Send Messages
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ItemDetailPage;
