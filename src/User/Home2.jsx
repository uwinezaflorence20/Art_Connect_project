import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Home2 = () => {
  const bannerImages = [
    "/im1.jpg", 
    "/im2.jpg",
    "/im3.jpg",
    "/im4.jpg",
    "/im0.jpg",
    "/img6.jpg",
    "/phogr1.jpg",
    "/phogr2.jpg",
    "/phogr3.jpg",
    "/visaul1.jpg",
    "/craft1.jpg",
    "/craft2.jpg",
    "/craft3.jpg",
    "/craft4.jpg",
    "/craft5.jpg",
    "/cloth1.jpg",
    "/cloth2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <header
        className="relative h-[25rem] bg-cover bg-center"
        style={{ backgroundImage: 'url(/img6.jpg)' }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-orange-500 text-3xl md:text-5xl font-bold mb-4">
            Home
          </h1>
          <nav className="text-sm  text-orange-50">
            <a href="/user" className="hover:text-gray-400">
              Home
            </a>
            <span className="mx-2">&gt;</span>
            
          </nav>
        </div>
      </header>

      {/* Filters and Sort Section */}
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-12 mt-8">
        {/* Filters Section */}
        <aside className="md:w-1/4 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-medium mb-4">Filters by category</h2>
          <div className="mb-4">
            <label htmlFor="mobileBrand" className="block text-sm font-medium text-gray-700">Art Category</label>
            <select
              id="mobileBrand"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-orange-500 focus:border-orange-500"
            >
              <option>Select ...</option>
              <option>Visual Art</option>
              <option>Clothes</option>
              <option>Craft</option>
            </select>
          </div>

          <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-medium shadow hover:bg-orange-600 transition">
            Search
          </button>
        </aside>

        {/* Sort and Banner Section */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Sort</h2>
            <button className="bg-orange-50 px-3 py-2 rounded-full hover:bg-orange-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h12M9 16h6M9 4h6"
                />
              </svg>
            </button>
          </div>

          {/* Advertisement Banner with image change */}
          <div className="relative bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <img
              src={bannerImages[currentImageIndex]}
              alt="Advertisement"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-y-0 left-0 flex items-center px-4">
              <button
                onClick={goToPreviousImage}
                className="bg-white rounded-full shadow p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <button
                onClick={goToNextImage}
                className="bg-white rounded-full shadow p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Product Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/im1.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Alice Kamikazi</h3>
                <p className="text-sm text-gray-500">Art Description: A beautiful painting depicting the serene beauty </p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>
            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/im2.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Emmy Byiringiro</h3>
                <p className="text-sm text-gray-500">Art Description: A beautiful painting depicting the serene beauty of a sunset at the beach.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>
            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/im3.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Claudine Murekatete</h3>
                <p className="text-sm text-gray-500">Art Description: A beautiful painting .</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>
            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/im1.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Steven Kamugisha</h3>
                <p className="text-sm text-gray-500">Art Description: A beautiful painting depicting the serene beauty .</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>
            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/im4.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name:Chanella Rwego </h3>
                <p className="text-sm text-gray-500">Art Description: A modern abstract piece with geometric shapes and vibrant colors.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>
           
            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/img6.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Eric Manzi</h3>
                <p className="text-sm text-gray-500">Art Description: A modern abstract piece with geometric shapes and vibrant colors.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>

            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/phogr1.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Eric Manzi</h3>
                <p className="text-sm text-gray-500">Art Description: A modern abstract piece with geometric shapes and vibrant colors.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>


            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/phogr2.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Eric Manzi</h3>
                <p className="text-sm text-gray-500">Art Description: A modern abstract piece with geometric shapes and vibrant colors.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>

            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/phogr3.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Eric Manzi</h3>
                <p className="text-sm text-gray-500">Art Description: A modern abstract piece with geometric shapes and vibrant colors.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>

            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/craft1.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Eric Manzi</h3>
                <p className="text-sm text-gray-500">Art Description: A modern abstract piece with geometric shapes and vibrant colors.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>

            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/craft2.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Eric Manzi</h3>
                <p className="text-sm text-gray-500">Art Description: A modern abstract piece with geometric shapes and vibrant colors.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>

            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/craft3.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Eric Manzi</h3>
                <p className="text-sm text-gray-500">Art Description: A modern abstract piece with geometric shapes and vibrant colors.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>

            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/craft4.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Eric Manzi</h3>
                <p className="text-sm text-gray-500">Art Description: A modern abstract piece with geometric shapes and vibrant colors.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>

            <a href="#" className="group relative block overflow-hidden">
              <img
                src="/craft5.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Artist Name: Eric Manzi</h3>
                <p className="text-sm text-gray-500">Art Description: A modern abstract piece with geometric shapes and vibrant colors.</p>
                <Link to="artist" className="text-sm text-orange-500 mt-2 inline-block">
                  View More
                </Link>
              </div>
            </a>
            {/* Additional Artist Cards can follow the same structure */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home2;
