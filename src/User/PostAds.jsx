import { useState } from "react";

const PostAds = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = () => {
    if (!category || !subCategory || !title || !description || images.length === 0) {
      setError("All fields are required. Please fill in all fields and upload at least one image.");
    } else {
      setError("");
      alert("Ad submitted successfully!");
      // Add submission logic here.
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header
        className="relative h-[25rem] bg-cover bg-center"
        style={{ backgroundImage: 'url(/img6.jpg)' }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">POST AD</h1>
          <nav className="text-sm text-gray-200">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">&gt;</span>
            <span className="font-medium">Post Ad</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Ad Category Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">1</span>
                Ad Category
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  className="border p-4 rounded-md w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Vehicles">Vehicles</option>
                </select>
                <select
                  className="border p-4 rounded-md w-full"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  <option value="">Select Sub-category</option>
                  {category === "Electronics" && (
                    <>
                      <option value="Phones">Phones</option>
                      <option value="Laptops">Laptops</option>
                      <option value="Cameras">Cameras</option>
                    </>
                  )}
                  {category === "Clothing" && (
                    <>
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                      <option value="Kids">Kids</option>
                    </>
                  )}
                  {category === "Vehicles" && (
                    <>
                      <option value="Cars">Cars</option>
                      <option value="Motorcycles">Motorcycles</option>
                      <option value="Trucks">Trucks</option>
                    </>
                  )}
                </select>
              </div>
            </section>

            {/* Ad Information Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">2</span>
                Ad Information
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter Title..."
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  placeholder="Enter Description..."
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </section>

            {/* Ad Images Section */}
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">3</span>
                Ad Images
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <input
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label
                  htmlFor="imageUpload"
                  className="cursor-pointer text-gray-500"
                >
                  Drag and drop your images here, or click to upload
                </label>
                {images.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {images.map((img, idx) => (
                      <img
                        key={idx}
                        src={URL.createObjectURL(img)}
                        alt={`Ad Preview ${idx + 1}`}
                        className="h-20 w-20 object-cover rounded-md shadow"
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Right Section */}
          <aside className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">!</span>
              Safety Tips
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Protect Personal Information:</strong> Avoid sharing sensitive information such as financial details. Use secure messaging.
              </li>
              <li>
                <strong>Use Quality Photos:</strong> Include clear and accurate photos to highlight your item's condition and features.
              </li>
              <li>
                <strong>Meet in Safe Places:</strong> Prefer meeting in public locations and verify the buyer/seller before proceeding.
              </li>
            </ul>
          </aside>
        </div>

        {/* Publish Ad Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8 text-center">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <p className="text-gray-700 mb-4">
            Once you submit your ad, please allow a few minutes for it to appear on our platform. Thank you for your patience!
          </p>
          <button
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            onClick={handleSubmit}
          >
            Publish Your Ad
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostAds;
