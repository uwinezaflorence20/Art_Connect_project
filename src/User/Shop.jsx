import React, { useState } from "react";

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState(null);

  const shops = [
    { id: 1, name: "Clothing Shop", category: "Clothes", image: "/a.jpg", details: "High-quality clothing and accessories." },
    { id: 2, name: "Fashion Boutique", category: "Fashion", image: "/hb-inside.jpg", details: "Trendy and stylish outfits for all occasions." },
    { id: 3, name: "Home Decor Store", category: "Home Decor", image: "/azizi.jpg", details: "Beautiful decor for your living spaces." },
  ];

  const openModal = (shop) => {
    setSelectedShop(shop);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedShop(null);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/img6.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative flex flex-col justify-center items-center text-center h-full text-white">
          <h1 className="text-4xl text-orange-500 font-bold mb-2">SHOPS</h1>
        </div>
      </div>

      {/* Shop Content Section */}
      <div className="container mx-auto p-4 md:p-8 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4">Available Shops</h3>
          <div className="border-t-2 border-orange-500 w-12 mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop) => (
              <div key={shop.id} className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center text-center">
                <div
                  className="bg-cover bg-center w-full h-40 rounded-md mb-4"
                  style={{ backgroundImage: `url(${shop.image})` }}
                ></div>
                <h4 className="text-lg font-semibold">{shop.name}</h4>
                <p className="text-sm text-gray-600 mb-2">Category: {shop.category}</p>
                <button
                  onClick={() => openModal(shop)}
                  className="bg-orange-500 text-white rounded-lg px-6 py-2 font-medium hover:bg-orange-600"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Shop Details */}
      {isModalOpen && selectedShop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-2xl font-bold"
              onClick={closeModal}
            >
              X
            </button>
            <h2 className="text-2xl font-semibold mb-4">{selectedShop.name}</h2>
            <div className="border-t-2 border-orange-500 w-12 mb-6"></div>
            <p className="text-gray-700">{selectedShop.details}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-orange-500 text-white rounded-lg px-6 py-2 font-medium hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
