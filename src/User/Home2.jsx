import { useState, useEffect } from "react";

const Home2 = () => {
  const bannerImages = [
    "/im1.jpg", // Ensure the images are in the public folder
    "/im2.jpg",
    "/im3.jpg",
    "/im4.jpg",
    "/im6.jpg",
    "/bg.jpg",
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
            <span className="font-medium">Post Ad</span>
          </nav>
        </div>
      </header>

      {/* Filters and Sort Section */}
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-12 mt-8">
        {/* Filters Section */}
        <aside className="md:w-1/4 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-medium mb-4">Filters by category</h2>
          <div className="mb-4">
            <label htmlFor="mobileBrand" className="block text-sm font-medium text-gray-700">Mobile Brand</label>
            <select
              id="mobileBrand"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-orange-500 focus:border-orange-500"
            >
              <option>Select ...</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Huawei</option>
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
              <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <img
                src="/im1.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <p className="text-gray-700">
                  $49.99
                  <span className="text-gray-400 line-through">$80</span>
                </p>
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>
                <p className="mt-1.5 line-clamp-3 text-gray-700">
               my card
                </p>
                <form className="mt-4 flex gap-4">
                  <button className="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
                    Add to Cart
                  </button>
                  <button type="button" className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105">
                    Buy Now
                  </button>
                </form>
              </div>
            </a>
            <a href="#" className="group relative block overflow-hidden">
              <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <img
                src="/im2.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <p className="text-gray-700">
                  $49.99
                  <span className="text-gray-400 line-through">$80</span>
                </p>
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>
                <p className="mt-1.5 line-clamp-3 text-gray-700">
                  Lorem ipsum dolor sit 
                </p>
                <form className="mt-4 flex gap-4">
                  <button className="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
                    Add to Cart
                  </button>
                  <button type="button" className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105">
                    Buy Now
                  </button>
                </form>
              </div>
            </a>
            <a href="#" className="group relative block overflow-hidden">
              <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <img
                src="/im3.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <p className="text-gray-700">
                  $49.99
                  <span className="text-gray-400 line-through">$80</span>
                </p>
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>
                <p className="mt-1.5 line-clamp-3 text-gray-700">
                  Lorem ipsum dolor sit ame
                </p>
                <form className="mt-4 flex gap-4">
                  <button className="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
                    Add to Cart
                  </button>
                  <button type="button" className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105">
                    Buy Now
                  </button>
                </form>
              </div>
            </a>
            <a href="#" className="group relative block overflow-hidden">
              <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
              >
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <img
                src="/im4.jpg"
                alt="Product"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative border border-gray-100 bg-white p-6">
                <p className="text-gray-700">
                  $49.99
                  <span className="text-gray-400 line-through">$80</span>
                </p>
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>
                <p className="mt-1.5 line-clamp-3 text-gray-700">
                  Lorem ipsum dolor sit amet
                </p>
                <form className="mt-4 flex gap-4">
                  <button className="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
                    Add to Cart
                  </button>
                  <button type="button" className="block w-full rounded bg-gray-900 px-2 py-1 text-sm font-medium text-white transition hover:scale-105">
                    Buy Now
                  </button>
                </form>
              </div>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home2;
