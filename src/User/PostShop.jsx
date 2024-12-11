import { useState } from "react";

const PostShop = () => {
  const [shopName, setShopName] = useState("");
  const [about, setAbout] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = () => {
    if (
      !shopName ||
      !about ||
      !category ||
      !city ||
      !address ||
      !email ||
      !phone ||
      images.length === 0
    ) {
      setError("All fields are required. Please fill in all fields and upload at least one image.");
    } else {
      setError("");
      alert("Shop details submitted successfully!");
      // Add submission logic here (e.g., API call).
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Shop Details Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">1</span>
                Shop Details
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Shop Name"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                />
                <textarea
                  placeholder="About the Shop..."
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  rows="4"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
                <input
                  type="text"
                  placeholder="Category (e.g., Electronics, Clothing)"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
            </section>

            {/* Location Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">2</span>
                Location
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Shop Address"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">3</span>
                Contact Information
              </h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </section>

            {/* Image Upload Section */}
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">4</span>
                Upload Shop Images
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <input
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label htmlFor="imageUpload" className="cursor-pointer text-gray-500">
                  Drag and drop your images here, or click to upload
                </label>
                {images.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {images.map((img, idx) => (
                      <img
                        key={idx}
                        src={URL.createObjectURL(img)}
                        alt={`Shop Preview ${idx + 1}`}
                        className="h-20 w-20 object-cover rounded-md shadow"
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>

        {/* Submit Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8 text-center">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            onClick={handleSubmit}
          >
            Publish Your Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostShop;
