
import MainLayout from '../Layouts/MainLayout';

function AboutUsPage() {
  return (
    <MainLayout>
      <div className='relative'>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D")', height: '45%' }}
        ></div>

        <div className='relative p-[90px] mx-auto max-w-md text-white'>
          <h1 className='text-4xl md:text-5xl font-semibold text-center max-w-[700px] leading-tight mb-6'>About Us</h1>
          <hr className='border-2 border-white mb-6' />
        </div>

        <div className="relative bg-white p-8 mx-8 rounded-lg shadow-md mb-8">
          <div className="mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Welcome to Real Estate Project in Phnom Penh, Cambodia</h2>

            <p className="text-gray-700 mb-6">
              At Real Estate Project, we take pride in being your trusted partner in finding the perfect home or room in the vibrant city of Phnom Penh. Established in 2024, we understand that the journey to finding the ideal property can be both exciting and challenging. That's why we are here to simplify the process for you.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>

            <p className="text-gray-700 mb-6">
              Our mission is to assist property seekers in Phnom Penh by providing a seamless and user-friendly platform to discover homes and rooms that match their unique preferences and requirements. Whether you are a first-time renter, a growing family, or an experienced investor, Real Estate Project is committed to making your property search a rewarding and enjoyable experience.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Why Choose Real Estate Project?</h3>

            <ul className="list-disc list-inside mb-6">
              <li className="text-gray-700">Local Expertise: Our team has an in-depth knowledge of the Phnom Penh real estate market. We are well-versed in the neighborhoods, property trends, and the diverse range of options available.</li>
              <li className="text-gray-700">User-Friendly Platform: Navigate through our website with ease. Our user-friendly interface ensures that property seekers can efficiently search, filter, and explore the listings to find the perfect match.</li>
              <li className="text-gray-700">Comprehensive Listings: We offer a diverse range of properties, including apartments, houses, and rooms, to cater to the varied needs of our clients.</li>
              <li className="text-gray-700">Transparent Transactions: Real Estate Project is committed to transparency. We provide accurate and detailed information about each listing, ensuring that you have all the information you need to make informed decisions.</li>
            </ul>

            <h2 className="text-3xl font-semibold mb-6">Your Journey Starts Here</h2>

            <p className="text-gray-700 mb-6">
              Whether you are looking for a temporary residence or a long-term investment, Real Estate Project is your go-to destination. We are dedicated to assisting you in finding a home that not only meets your practical needs but also aligns with your lifestyle and aspirations.
            </p>

            <p className="text-gray-700">
              Thank you for choosing Real Estate Project as your partner in the exciting journey of finding your dream home in Phnom Penh. Start exploring our listings today, and let us help you turn your property dreams into reality.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutUsPage;
