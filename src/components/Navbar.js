import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaAws, FaHtml5, FaCss3Alt, FaDatabase, FaPython, FaJava, FaGit } from 'react-icons/fa'; // Add more icons as needed

const Navbar = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (300 / 15); // 300ms duration, adjust this for faster/slower scroll
    const interval = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(interval);
      }
    }, 15);
  };
  

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div onClick={scrollToTop} className="text-2xl font-bold flex items-center cursor-pointer">
        <span className="mr-2">🌐</span>
        <span className="text-[#DB4437]">Dev</span>
        <span className="text-[#F4B400]">Por</span>
        <span className="text-[#0F9D58]">tfo</span>
        <span className="text-[#4285F4]">lio</span>
      </div>

      <div className="hidden md:flex space-x-4">
        {/* Tech Stack Icons */}
        <FaReact className="text-[#61DBFB] text-2xl" />
        <FaNodeJs className="text-[#68A063] text-2xl" />
        <FaGithub className="text-black text-2xl" />
        <FaAws className="text-[#FF9900] text-2xl" />
        <FaHtml5 className="text-[#E34C26] text-2xl" />
        <FaCss3Alt className="text-[#1572B6] text-2xl" />
        <FaDatabase className="text-[#4DB33D] text-2xl" />
        <FaPython className="text-[#306998] text-2xl" />
        <FaJava className="text-[#F89820] text-2xl" />
        <FaGit className="text-[#F05032] text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;
