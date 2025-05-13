import React from 'react';
import briefcaseImg from '../assets/briefcase.png';
import DesignImg from '../assets/Design.jpg';
import DevelopmentImg from '../assets/Development.jpg';
import MarketingImg from '../assets/Marketing.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-100 via-white-200 to-white-300 text-gray-900">
      {/* Hero Section with Promo Section */}
      <section className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 text-center py-40 relative">
        <div className="flex items-center space-x-4 animate-bounce relative z-10">
          {/* Suitcase Image */}
          <img src={briefcaseImg} alt="Briefcase" className="w-40 h-40 transform rotate-6" />
          <h1 className="text-7xl md:text-9xl font-extrabold text-white">FixMate</h1>
        </div>
        <p className="text-xl text-blue max-w-xl mt-6 relative z-10">
          Step into the world of opportunity and experience freelancing like never before.
        </p>
        <button className="mt-8 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-100 transition duration-300 shadow-lg relative z-10">
          Get Started
        </button>

        {/* Promo Section */}
        <div className="bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900 text-white-800 text-center py-3 w-full">
          <h2 className="text-xl font-semibold text-white">
            Hurry up! Become our first Client and get <span className="text-blue-900">20% OFF</span> from your first deal!
          </h2>
        </div>
      </section>

      {/* Feature Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-blue-400 to-blue-200">
        <h2 className="text-4xl font-bold mb-8 text-blue-900">A whole world of freelance talent at your fingertips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <img src={DesignImg} alt="Design" className="w-full h-40 object-cover rounded-md" />
            <p className="text-lg mt-4">Design</p>
          </div>
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <img src={DevelopmentImg} alt="Development" className="w-full h-40 object-cover rounded-md" />
            <p className="text-lg mt-4">Development</p>
          </div>
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <img src={MarketingImg} alt="Marketing" className="w-full h-40 object-cover rounded-md" />
            <p className="text-lg mt-4">Marketing</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-b from-blue-200 to-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose WorkWave?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          At FixMate, we connect clients with top talent to bring projects to life. Efficiency, trust, and quality are at the heart of everything we do.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-100 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300">
            <p className="text-xl font-bold">Efficient Hiring</p>
            <p className="text-sm mt-2">Quick and easy hiring process.</p>
          </div>
          <div className="p-6 bg-blue-100 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300">
            <p className="text-xl font-bold">Trusted Freelancers</p>
            <p className="text-sm mt-2">Verified and skilled professionals.</p>
          </div>
          <div className="p-6 bg-blue-100 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300">
            <p className="text-xl font-bold">Quality Delivery</p>
            <p className="text-sm mt-2">Exceptional results guaranteed.</p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">What We Offer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-900 hover:scale-105 transform transition duration-300">
            <p className="text-xl font-bold text-blue-900">Easy Project Management</p>
            <p className="text-sm mt-2">Manage your freelance projects effortlessly.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-900 hover:scale-105 transform transition duration-300">
            <p className="text-xl font-bold text-blue-900">Seamless Collaboration</p>
            <p className="text-sm mt-2">Work closely with freelancers to meet your needs.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg border border-blue-900 hover:scale-105 transform transition duration-300">
            <p className="text-xl font-bold text-blue-900">Diverse Skillsets</p>
            <p className="text-sm mt-2">Find talent for every type of project.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Hear What Our Community Has to Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <p className="text-lg font-semibold">Chethana Rowell</p>
            <p className="text-sm mt-2">"FlexMate helped me find the right freelancer for my project with ease!"</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <p className="text-lg font-semibold">Mileesha Fernando</p>
            <p className="text-sm mt-2">"Great platform for finding quality talent quickly."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <p className="text-lg font-semibold">Shemeen Jordan</p>
            <p className="text-sm mt-2">"The freelancers I hired were professional and delivered on time."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <p className="text-lg font-semibold">Jane Ferdz</p>
            <p className="text-sm mt-2">"FlexMate is my go-to for hiring freelancers!"</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
