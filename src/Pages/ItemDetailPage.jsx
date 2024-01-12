import { useParams } from 'react-router-dom';

import { BedSingle, MapPin, PhoneCall, Star, StarHalf } from 'lucide-react';
import { useEffect, useState } from 'react';
import MainLayout from '../Layouts/MainLayout';

import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { db } from '../config/firebaseconfig';
import data from '../data/mock-data.json';
import cn from '../utils/cn';

const ItemDetailPage = () => {
  const user = useSelector((state) => state.auth.value);
  const itemId = useParams();
  const [data, setData] = useState();

  const [inputReview, setInputReview] = useState('');
  const [rating, setRating] = useState(0);
  const [starTemp, setStarTemp] = useState(0);
  const [reviewErrorMessage, setReviewErrorMessage] = useState('');

  useEffect(() => {
    onSnapshot(doc(db, 'posts', itemId.id), (doc) => {
      setData({ ...doc.data(), id: doc.id });
      // console.log({ ...doc.data(), id: doc.id });
    });
  }, [itemId]);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handlePostReviewClick = (e) => {
    e.preventDefault();

    if (!inputReview) {
      setReviewErrorMessage('Please enter review');
      return;
    }

    if (!rating) {
      setReviewErrorMessage('Please enter rating');
      return;
    }

    setReviewErrorMessage('');

    console.log(user);

    const inputData = {
      userId: user.userId,
      userName: user.userName,
      userEmail: user.userEmail,
      message: inputReview,
      rating: rating,
      isPending: true,
      createdAt: new Date(Date.now()).toISOString(),
    };

    const newData = { ...data };

    newData.customerReviews.push(inputData);

    setDoc(doc(db, 'posts', data.id), newData).then(() => {
      setInputReview('');
      setRating(0);
    });
  };

  const handleChangeReview = (review) => {
    const inputNewReview = {
      ...review,
      isPending: !review.isPending,
    };

    const newData = { ...data };

    const index = newData.customerReviews.findIndex((each) => each.createdAt === inputNewReview.createdAt);

    if (index === -1) {
      return;
    }

    newData.customerReviews[index] = inputNewReview;

    setDoc(doc(db, 'posts', data.id), newData);
  };

  return (
    <MainLayout>
      <div className='max-w-screen-xl mx-auto min-h-[80vh] px-2 flex flex-col py-10'>
        {/* TITLE */}
        <div className='w-full flex justify-between'>
          <div>
            <h1 className='text-3xl'>{data?.itemName}</h1>
            <div className='flex items-center gap-2 mt-1 text-gray-500'>
              <MapPin className='w-5 h-5' />
              <p className='text-md'>{data?.details?.location.join(', ')}</p>
            </div>
          </div>
          <div>
            <h1 className='text-3xl'>${data?.price?.toLocaleString()}</h1>
          </div>
        </div>

        {/* IMAGES */}
        <div className='grid grid-cols-12 h-[500px] gap-5 mt-5'>
          <div className='col-span-6 h-full overflow-hidden'>
            <img src={data?.displayImage} alt='ji' className='h-full w-full object-cover rounded-xl' />
          </div>

          <div className='col-span-3'>
            <img src={data?.allImages[0]} alt='ji' className='h-full w-full object-cover rounded-xl' />{' '}
          </div>

          <div className='col-span-3 flex flex-col gap-5'>
            <div className='h-full relative rounded-xl overflow-hidden'>
              <img src={data?.allImages[1]} alt='jbjfvncdbgdhgbdi' className='h-full w-full object-cover rounded-xl' />
              <img src='' alt='ji' className='h-full w-full object-cover rounded-xl' />
            </div>

            <div className='h-1/2 relative  rounded-xl overflow-hidden'>
              <img src={data?.allImages[2]} alt='ji' className='h-full w-full object-cover rounded-xl' />
              <img src='' alt='ji' className='h-full w-full object-cover' />

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
              <p className='mt-5 text-lg text-gray-500'>{data?.itemDescription}</p>
            </div>
          </div>

          {/* CONTACT */}
          <div className='border rounded-lg col-span-4 p-5 row-span-3'>
            <h3 className='text-xl font-semibold'>Contact</h3>

            <div className='mt-5 flex items-center gap-5'>
              <div className='avatar'>
                <div className='w-20 rounded-full'>
                  <img src={data?.contactPerson.profileImg} alt='test' />
                </div>
              </div>

              <div className='space-y-2'>
                <h3 className='text-xl font-semibold'>{data?.contactPerson.name}</h3>
                <p className='flex gap-3'>
                  <span>
                    <PhoneCall className='w-5' />
                  </span>
                  <span>{data?.contactPerson.phoneNumber}</span>
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
                <p className=' font-semibold'>Bathroom:</p>
                <p className='text-gray-500'>{data?.details.bath}</p>
              </div>
              <div className='flex gap-2'>
                <p className=' font-semibold'>Room :</p>
                <p className='text-gray-500'>{data?.details.bed}</p>
              </div>
              <div className='flex gap-2'>
                <p className=' font-semibold'>Structure Type:</p>
                <p className='text-gray-500'>Brick</p>
              </div>
              <div className='flex gap-2'>
                <p className=' font-semibold'>Property Price</p>
                <p className='text-gray-500'>${data?.price.toLocaleString()}</p>
              </div>
              <div className='flex gap-2'>
                <p className=' font-semibold'>Property Type:</p>
                <p className='text-gray-500'>{data?.category}</p>
              </div>
              <div className='flex gap-2'>
                <p className=' font-semibold'>property status:</p>
                <p className='text-gray-500'>For {data?.type}</p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className='border rounded-lg col-span-8 p-5'></div>

          {/* Customer Reviews */}
          <div className='border rounded-lg col-span-8 p-5'>
            <h3 className='text-xl font-semibold'>Customer Reviews</h3>

            <div className='mt-5'>
              {data?.customerReviews.map((review, index) => {
                if (user.userRole !== 'admin' && review.isPending) {
                  return null;
                }
                return (
                  <div className='border p-2 rounded-md bg-gray-50 flex flex-col mb-3' key={index}>
                    <div className='flex items-center gap-5'>
                      <h1 className='text-lg font-semibold'>{review.userName}</h1>
                      <div className='flex gap-2'>
                        {['1', '2', '3', '4', '5'].slice(0, review.rating).map((rating, index) => {
                          return <Star className='w-5 h-5 text-yellow-500' key={index} />;
                        })}
                      </div>
                    </div>

                    <p className='text-gray-500'>{review.message}</p>

                    {user.userRole === 'admin' && (
                      <div className='flex gap-2 self-end'>
                        {review.isPending ? (
                          <button className='btn btn-sm btn-success' onClick={() => handleChangeReview(review)}>
                            Approve
                          </button>
                        ) : (
                          <button className='btn btn-sm btn-error' onClick={() => handleChangeReview(review)}>
                            Hide
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* POST REVIEW */}
          <div className='border rounded-lg col-span-4 p-5 h-fit'>
            <h3 className='text-xl font-semibold'>Post a review</h3>
            <form className='w-full flex flex-col items-center mt-2 gap-5' onSubmit={(e) => handlePostReviewClick(e)}>
              <label className='form-control w-full'>
                <textarea
                  className='textarea textarea-bordered h-24'
                  placeholder='Write your messages here'
                  value={inputReview}
                  onChange={(e) => setInputReview(e.target.value)}
                ></textarea>
              </label>
              <div className='flex justify-between items-center w-full'>
                <div className='flex'>
                  {['1', '2', '3', '4', '5'].map((star, index) => {
                    return (
                      <Star
                        key={index}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => {
                          setRating(0);
                          setStarTemp(star);
                        }}
                        onMouseLeave={() => {
                          setStarTemp(0);
                          setRating(star);
                        }}
                        className={cn('w-8 ', index + 1 <= starTemp || index < rating ? 'text-yellow-500' : '')}
                      />
                    );
                  })}
                </div>

                <button type='submit' className='btn btn-primary'>
                  Post Review
                </button>
              </div>
              {reviewErrorMessage && <p className='text-red-500'>Error: {reviewErrorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ItemDetailPage;
