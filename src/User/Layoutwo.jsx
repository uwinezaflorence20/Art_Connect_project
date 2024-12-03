import { Outlet } from 'react-router-dom';
import Navbar2 from '../User/Navbar2';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { useState, useEffect } from 'react';

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      <Navbar2 />
      <Outlet />
      
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-orange-500 p-3 text-white shadow-lg transition hover:bg-white hover:text-sky-800"
        >
          <span className="sr-only">Back to top</span>
          <MdKeyboardArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Layout;
