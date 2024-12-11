import { Link } from "react-router-dom";

const ShopDetails = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Shop Name</h2>
          <div className="border-t-2 border-orange-500 w-12 mb-6"></div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
          <Link to="/shops">
            <button className="mt-4 bg-orange-500 text-white rounded-lg px-6 py-2 font-medium hover:bg-orange-600">
              Back to Shops
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
