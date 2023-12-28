import MainLayout from '../Layouts/MainLayout';
import ItemCard from '../components/ItemCard';
import { MoveRight } from 'lucide-react';

const BrowsePage = () => {
  return (
    <MainLayout>
      <div className='max-w-screen-2xl mx-auto px-2 flex flex-col justify-center items-center py-10'>
        <section className='w-full'>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 border p-1 sm:p-2 md:p-3 rounded-lg bg-gray-100'>
            <input type='text' placeholder='Enter address, city or ZIP code' className='input input-bordered w-full col-span-3' />
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </section>

        <section className='w-full my-10'>
          <div className='w-full flex items-center justify-between'>
            <h1 className='text-3xl font-semibold'>Browse</h1>
          </div>
          <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 lg:gap-7'>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default BrowsePage;
