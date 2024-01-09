import MainLayout from '../Layouts/MainLayout';
import ItemCard from '../components/ItemCard';

import { useState } from 'react';
import mockData from '../data/mock-data.json';

const BrowsePage = () => {
  const [searchValue, setSearchValue] = useState('');

  const [data, setData] = useState(mockData);
  const [backUp, setBackUpData] = useState(mockData);

  const handleChangeType = (e) => {
    const inputType = e.target.value;

    if (inputType === 'none') {
      setData(backUp);
    } else {
      setData(backUp.filter((eachData) => eachData.type === inputType));
    }
  };

  const handleChangeMinPrice = (e) => {
    const inputMinPrice = e.target.value;
    console.log(inputMinPrice);

    setData(backUp.filter((eachData) => eachData.price >= inputMinPrice));
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);

    setData(backUp.filter((item) => String(item.itemName).toLowerCase().includes(String(e.target.value).toLowerCase())));
  };
  const handleChangeMaxPrice = (e) => {
    const inputMaxPrice = e.target.value;
    console.log(inputMaxPrice);

    setData(backUp.filter((eachData) => eachData.price <= inputMaxPrice));
  };

  const handleChangeCategory = (e) => {
    const inputType = e.target.value;

    if (inputType === 'none') {
      setData(backUp);
    } else {
      setData(backUp.filter((eachData) => eachData.category === inputType));
    }
  };

  return (
    <MainLayout>
      <div className='max-w-screen-2xl mx-auto px-2 flex flex-col justify-center items-center py-10'>
        <section className='w-full'>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 border p-1 sm:p-2 md:p-3 rounded-lg bg-gray-100'>
            <input
              type='text'
              value={searchValue}
              onChange={(e) => handleSearch(e)}
              placeholder='Enter name'
              className='input input-bordered w-full col-span-3'
            />
            <select
              className='select select-bordered w-full max-w-xs'
              defaultValue={'type'}
              onChange={(e) => handleChangeType(e)}
            >
              <option value='type' disabled>
                Type
              </option>
              <option value='none'>None</option>
              <option value='rent'>Rent</option>
              <option value='sale'>Sale</option>
              <option value='booking'>Booking</option>
            </select>
            <select
              className='select select-bordered w-full max-w-xs'
              defaultValue={'min'}
              onChange={(e) => handleChangeMinPrice(e)}
            >
              <option disabled value={'min'}>
                Min price
              </option>
              <option value={1000}>$1000</option>
              <option value={2500}>$2500</option>
              <option value={3000}>$3000</option>
              <option value={3500}>$3500</option>
              <option value={3800}>$3800</option>
              <option value={4000}>$4000</option>
              <option value={10000}>$10000</option>
            </select>
            <select
              className='select select-bordered w-full max-w-xs'
              defaultValue={'max'}
              onChange={(e) => handleChangeMaxPrice(e)}
            >
              <option disabled value={'max'}>
                Max price
              </option>
              <option value={5000}>$5000</option>
              <option value={8000}>$8000</option>
              <option value={9000}>$9000</option>
              <option value={10000}>$10000</option>
              <option value={20000}>$20000</option>
              <option value={30000}>$30000</option>
            </select>
            <select
              className='select select-bordered w-full max-w-xs'
              defaultValue={'category'}
              onChange={(e) => handleChangeCategory(e)}
            >
              <option value={'category'} disabled>
                Category
              </option>
              <option value={'none'}>None</option>
              <option value={'small-house'}>Small house</option>
              <option value={'big-house'}>Big house</option>
              <option value={'hotel'}>Hotel</option>
              <option value={'condo'}>Condo</option>
              <option value={'apartment'}>Apartment</option>
              <option value={'land'}>Land</option>
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
