import { MoveRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import MainLayout from '../Layouts/MainLayout';
import ItemCard from '../components/ItemCard';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mockData from '../data/mock-data.json';
import { db } from '../config/firebaseconfig';
import { collection, onSnapshot } from 'firebase/firestore';
function Homepage() {
  const user = useSelector((state) => state.auth.value);
  const [data, setData] = useState([]);

  const dbCollectionRef = collection(db, 'posts');
  // console.log(user);

  useEffect(() => {
    onSnapshot(dbCollectionRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });

      setData(posts);
    });
  }, []);

  return (
    <MainLayout>
      <div>
        <div className='max-w-screen-2xl mx-auto px-2 flex flex-col justify-center items-center py-20'>
          {/* HERO SECTION */}
          <section className='flex flex-col items-center'>
            <h1 className=' text-4xl md:text-5xl font-semibold text-center max-w-[700px] leading-tight'>FIND YOUR DREAM HOME</h1>
            <p className='text-center text-sm md:text-xl text-gray-500 max-w-[700px] mt-5'>
              If you're looking for a place where you can be yourself, don't give up. Keep searching until you find a place that
              feels like home
            </p>
            <div className='grid sm:flex gap-10 mt-10'>
              {user.isLoggedIn ? (
                <Link to='/profile' className='btn btn-primary'>
                  My Profile
                </Link>
              ) : (
                <Link to='/sign-up' className='btn btn-primary '>
                  Join Us
                </Link>
              )}
              <Link to='/browse' className='btn btn-ghost'>
                <span>Browse more</span>
                <MoveRight className='mt-0.5' />
              </Link>
            </div>
          </section>

          {/* CARD CONTAINER SECTION */}
          <section className='w-full mt-32'>
            <div className='w-full flex items-center justify-between'>
              <h1 className='text-xl sm:text-3xl font-semibold'>Top pick for you</h1>
              <Link to='/browse' className='btn btn-link'>
                See more
                <MoveRight className='mt-0.5' />
              </Link>
            </div>
            <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 lg:gap-7'>
              {data.slice(0, 5).map((item) => {
                return <ItemCard key={item.id} item={item} />;
              })}
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default Homepage;
