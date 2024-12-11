
import { HiPlusCircle } from "react-icons/hi";
import { FaStore } from "react-icons/fa"; // Import store icon
import { FaUserCircle } from "react-icons/fa"; // Import profile icon
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx"; // For conditional class handling

const MobileMenu = ({ isOpen, toggleMobileMenu }) => (
  <div className={clsx("md:hidden bg-sky-100", { hidden: !isOpen })}>
    <nav aria-label="Global" className="block p-4">
      <ul className="space-y-4 text-md">
        <li role="menuitem">
          <Link to="shop">
            <button className="flex items-center gap-2 text-orange-500 bg-orange-100 rounded-md w-full px-5 py-2 font-medium transition hover:bg-orange-600 hover:text-white">
              <FaStore className="text-xl" />
              Shops
            </button>
          </Link>
        </li>
        <li role="menuitem">
          <Link to="profile">
            <button className="flex items-center gap-2 text-orange-500 bg-orange-100 rounded-md w-full px-5 py-2 font-medium transition hover:bg-orange-600 hover:text-white">
              <FaUserCircle className="text-xl" />
              Profile
            </button>
          </Link>
        </li>
        <li role="menuitem">
          <Link to="/ads">
            <button className="flex items-center gap-2 text-orange-500 bg-orange-100 rounded-md w-full px-5 py-2 font-medium transition hover:bg-orange-600 hover:text-white">
              <HiPlusCircle className="text-xl" />
              Post Your Ad
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // Close the mobile menu whenever the route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-white">
      <div className="w-full fixed top-0 bg-orange-50 z-30">
        <div className="flex h-16 items-center justify-between px-4 md:px-12">
          {/* Logo */}
          <Link to="/" className="block text-orange-500">
            <h1 className="text-3xl font-bold">
              Art<span className="text-2xl">Connect</span>
            </h1>
          </Link>

          {/* Buttons aligned to the right */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            {/* Shops Button */}
            <Link
              to="shop"
              className="flex items-center gap-2 px-4 py-2 text-orange-500 font-medium hover:text-orange-600 transition"
            >
              <div className="bg-orange-100 p-2 rounded-full">
                <FaStore className="text-orange-500 text-lg" />
              </div>
              Shops
            </Link>

            {/* Profile Button */}
            <Link
              to="profile"
              className="flex items-center gap-2 px-4 py-2 text-orange-500 font-medium hover:text-orange-600 transition"
            >
              <FaUserCircle className="text-xl text-orange-500" />
              Profile
            </Link>

            {/* Post Your Ad Button */}
            <Link
              to="ads"
              className="flex items-center gap-2 rounded-md bg-orange-500 px-5 py-2 text-white font-medium shadow hover:bg-orange-600 transition"
            >
              <HiPlusCircle className="text-xl" />
              Post Your Ad
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="block md:hidden">
            <button
              aria-label="Toggle mobile menu"
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      </div>
    </header>
  );
};

export default Navbar2;
