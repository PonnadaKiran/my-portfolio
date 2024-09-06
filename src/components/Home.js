import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section className="h-screen flex flex-col md:flex-row justify-center items-center bg-white text-center pt-16">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img 
            src="https://via.placeholder.com/200" 
            alt="Ponnada Kiran" 
            className="w-48 h-48 object-cover border-4 border-[#4285F4] shadow-lg"
          />
        </div>
        <div className="ml-0 md:ml-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#4285F4]">Ponnada Kiran</h1>
          <p className="text-xl md:text-2xl mb-6 text-[#DB4437]">Full Stack Developer | Innovating with Code</p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="px-4 md:px-6 py-2 md:py-3 bg-[#0F9D58] text-white font-semibold rounded-lg hover:bg-[#0d8a4f] transition">View My Work</a>
            <a href="#contact" className="px-4 md:px-6 py-2 md:py-3 bg-[#F4B400] text-white font-semibold rounded-lg hover:bg-[#d9a500] transition">Contact Me</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
