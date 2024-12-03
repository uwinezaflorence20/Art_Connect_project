import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-orange-50 fixed top-0 left-0 right-0 z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/" className="block text-orange-500">
              <h1 className="text-3xl font-bold text-pretty">
                Art<span className="text-2xl text-blu">Connect</span>
              </h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <CgMenuLeftAlt size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-orange-50 md:bg-transparent z-20`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-6 text-md md:gap-6">
              <li>
                <Link
                  to="/aboutus"
                  className="text-orange-500 transition hover:text-orange-300"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-orange-500 transition hover:text-orange-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-orange-500 transition hover:text-orange-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="text-orange-500 transition hover:text-orange-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              {/* Login/Sign Up inside the mobile menu */}
              <li className="block md:hidden mt-4">
                <Link
                  to="/signin"
                  className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-white hover:text-orange-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Login/Sign Up
                </Link>
              </li>
            </ul>
          </nav>

          {/* Login/Sign Up Button for larger screens */}
          <div className="hidden md:block">
            <Link
              to="/signin"
              className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-white hover:text-orange-500"
            >
              Login/Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
