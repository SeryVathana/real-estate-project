import { Menu } from 'lucide-react';
import MainLayout from '../Layouts/MainLayout';
import ItemCard from '../components/ItemCard';
import { MoveRight } from 'lucide-react';

import { mockData as data } from '../data/mock-data';

const BrowsePage = () => {
  return (
    <MainLayout>
      <div className='max-w-screen-2xl mx-auto px-2 flex flex-col justify-center items-center py-10'>
        <section className='w-full'>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 border p-1 sm:p-2 md:p-3 rounded-lg bg-gray-100'>
            <input type='text' placeholder='Enter address, city or ZIP code' className='input input-bordered w-full col-span-3' />
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
               for sale
              </option>
              <option>Vila</option>
              <option>Hotel</option>
              <option>cando</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Lan</option>
            </select>
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
               min price:$500k
              </option>
              <option>$230K</option>
              <option>$250k</option>
              <option>$280kk</option>
              <option>$300k</option>
              <option>$380k</option>
              <option>$400k</option>
              <option>$490k</option>
            </select>
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
                max price:$700k
              </option>
              <option>$700k</option>
              <option>$800k</option>
              <option>$900k</option>
              <option>$100k</option>
              <option>$200k</option>
              <option>$3000k</option>
            </select>
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
                Floor area m^2
              </option>
              <option> 55m² to 65m²</option>
              <option>75m² to 100m²</option>
              <option>185m2</option>
              <option>150m² </option>
               <option> 200m²</option>
            </select>
            <select className='select select-bordered w-full max-w-xs'>
              <option disabled selected>
              more
              </option>
              <option>small house</option>
              <option>Big house</option>
            </select>
          </div>
        </section>

        <section className='w-full my-10'>
          <div className='w-full flex items-center justify-between'>
            <h1 className='text-3xl font-semibold'>Browse</h1>
          </div>
          <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 lg:gap-7'>
            {data.map((item) => {
              return <ItemCard key={item.id} item={item} />;
             
              
            })}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default BrowsePage;
