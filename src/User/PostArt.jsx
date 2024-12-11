import { useState } from "react";

const PostArt = () => {
  const [artworkTitle, setArtworkTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = () => {
    if (
      !artworkTitle ||
      !artistName ||
      !category ||
      !about ||
      !email ||
      !location ||
      images.length === 0
    ) {
      setError("All fields are required. Please fill in all fields and upload at least one image.");
    } else {
      setError("");
      setIsFormComplete(true); // Mark form as complete and show payment modal
    }
  };

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handlePaymentSuccess = () => {
    alert("Payment successful! Your artwork is now submitted.");
    setIsPaymentModalOpen(false);
    setIsFormComplete(false); // Reset the form state after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Artwork Details Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">1</span>
                Artwork Details
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Artwork Title"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={artworkTitle}
                  onChange={(e) => setArtworkTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Artist Name"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={artistName}
                  onChange={(e) => setArtistName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Category (e.g., Painting, Sculpture)"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <textarea
                  placeholder="About the Artwork..."
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  rows="4"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </div>
            </section>

            {/* Location Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">2</span>
                Artist Location
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Location (City, Country)"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </section>

            {/* Contact Information Section */}
            <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">3</span>
                Artist Contact Information
              </h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg p-3 focus:ring focus:ring-orange-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </section>

            {/* Image Upload Section */}
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">4</span>
                Upload Artwork Images
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
                  Drag and drop your artwork images here, or click to upload
                </label>
                {images.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {images.map((img, idx) => (
                      <img
                        key={idx}
                        src={URL.createObjectURL(img)}
                        alt={`Artwork Preview ${idx + 1}`}
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
          {isFormComplete ? (
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              onClick={openPaymentModal}
            >
              Proceed to Payment
            </button>
          ) : (
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              onClick={handleSubmit}
            >
              Submit Artwork
            </button>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={closePaymentModal}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-500"
            >
              X
            </button>
            <h3 className="text-xl font-semibold mb-4">Payment Confirmation</h3>
            <p className="text-gray-700 mb-4">
              Please confirm your payment of $20 before submitting your artwork.
            </p>
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
              onClick={handlePaymentSuccess}
            >
              Confirm Payment
            </button>
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 mt-4"
              onClick={closePaymentModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostArt;
