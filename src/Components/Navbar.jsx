import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
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

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <Link
                    to="/aboutus"
                    className="text-orange-500 transition hover:text-orange-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-orange-500 transition hover:text-orange-300"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    className="text-orange-500 transition hover:text-orange-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className="text-orange-500 transition hover:text-orange-300"
                  >
                    Contact Us
                  </Link>
                </li>

              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                to="/signin"
                className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-white hover:text-orange-500"
              >
                Login/Sign Up
              </Link>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <CgMenuLeftAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
