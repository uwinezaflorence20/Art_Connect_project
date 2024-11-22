import AboutUs from "./AboutUs";
import Team from "./Team";
import Service from "./Services";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
   <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
      <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl mt-40 text-left">
            <h1 className="text-3xl font-bold text-orange-500 sm:text-5xl">
              Welcome to ArtConnect
            </h1>

            <p className="mt-4 max-w-lg text-gray-200 sm:text-xl">
              Art-Connect connects artists and art lovers in a vibrant space to
              explore, share, and celebrate creativity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
             <Link to="/signin"><a
                href="#"
                className="block w-full rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-600 focus:outline-none focus:ring sm:w-auto"
              >
                Sign Up
              </a>
</Link> 
            <Link to="/aboutus"> <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-500 shadow hover:bg-gray-100 focus:outline-none focus:ring sm:w-auto"
              >
                Learn More
              </a>
              </Link> 
            </div>
          </div>
        </div>
  </section>

      <AboutUs />
      <Service/>
      <Team />
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Home;
