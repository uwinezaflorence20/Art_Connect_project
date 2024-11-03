import { CgMenuLeftAlt } from "react-icons/cg";
const Navbar = () => {
  return (
    <header className="bg-orange-50">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-orange-500" href="#">
          <span className="sr-only">Home</span>
         <h1 className="text-3xl text-pretty font-bold "> Art<span className="text-2xl text-blu ">Connect</span></h1>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-md">
            <li>
              <a className="text-orange-500 transition hover:text-orange-300" href="#"> About Us </a>
            </li>

            <li>
              <a className="text-orange-500  hover:text-orange-300" href="#"> Team </a>
            </li>

            <li>
              <a className="text-orange-500  hover:text-orange-300" href="#"> Services </a>
            </li>

          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-white hover:text-orange-500 "
            href="#"
          >
            Login/sign up
          </a>

        
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
