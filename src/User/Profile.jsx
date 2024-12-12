import { useState } from "react";
import { Link } from "react-router-dom";
import PostShop from "./PostShop"; // Import the PostShop component

const Profile = () => {
  const [isPostArtModalOpen, setIsPostArtModalOpen] = useState(false);
  const [artists, setArtists] = useState([
    {
      name: "Uwineza Florence",
      joined: "Oct 16, 2024",
      location: "Rwanda, Kigali",
    },
  ]);

  const [newArtist, setNewArtist] = useState({
    name: "",
    joined: "",
    location: "",
  });

  const openPostArtModal = () => {
    setIsPostArtModalOpen(true);
  };

  const closePostArtModal = () => {
    setIsPostArtModalOpen(false);
  };

  const handleAddArtist = () => {
    if (newArtist.name && newArtist.joined && newArtist.location) {
      setArtists([...artists, newArtist]);
      setNewArtist({ name: "", joined: "", location: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArtist({ ...newArtist, [name]: value });
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: "url('/img6.jpg')", // Replace with your image URL
        }}
      >
        {/* Header Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>

        {/* Page Title and Breadcrumb */}
        <div className="relative flex flex-col justify-center items-center text-center h-full text-white">
          <h1 className="text-4xl text-orange-500 font-bold mb-2">PROFILE</h1>
          <nav className="text-md">
            <span>Home</span>
          </nav>
        </div>
      </div>

      {/* Profile Card (Overlapping the Header Image) */}
      <div className="relative -mt-16 w-full flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:space-x-6 w-11/12 md:w-3/4">
          {/* Profile Image */}
          <div className="bg-orange-600 text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold border-4 border-white">
            U
          </div>

          {/* Profile Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">Uwineza Florence</h2>
            <p className="text-gray-600 mb-1">
              ☀️ <span className="font-medium">Verified:</span> ✉️
            </p>
            <p className="text-gray-600 mb-1">
              📅 <span className="font-medium">Joined:</span> Oct 16, 2024
            </p>
            <p className="text-gray-600">
              📍 <span className="font-medium">Rwanda, Kigali</span>
            </p>
          </div>
        </div>
      </div>

      {/* Profiles Section */}
      <div className="container mx-auto p-4 md:p-8 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4">Profiles</h3>
          <div className="border-t-2 border-orange-500 w-12 mb-4"></div>

          {/* Profile Entries */}
          {artists.map((artist, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 rounded-lg p-4 shadow mb-4"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
                  {artist.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{artist.name}</h4>
                  <p className="text-sm text-gray-600">
                    Member Since: {artist.joined}
                  </p>
                </div>
              </div>
              {/* Logout Button */}
              <Link to="/">
                <button className="bg-red-500 text-white rounded-lg px-6 py-2 font-medium hover:bg-red-600">
                  LOGOUT
                </button>
              </Link>
            </div>
          ))}

          {/* Add New Artist */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Add New Artist</h4>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="name"
                value={newArtist.name}
                onChange={handleInputChange}
                placeholder="Artist Name"
                className="border rounded-lg p-2 mb-2 md:mb-0 flex-1"
              />
              <input
                type="text"
                name="joined"
                value={newArtist.joined}
                onChange={handleInputChange}
                placeholder="Joined Date (e.g., Dec 12, 2024)"
                className="border rounded-lg p-2 mb-2 md:mb-0 flex-1"
              />
              <input
                type="text"
                name="location"
                value={newArtist.location}
                onChange={handleInputChange}
                placeholder="Location (e.g., Rwanda, Kigali)"
                className="border rounded-lg p-2 mb-2 md:mb-0 flex-1"
              />
            </div>
            <button
              onClick={handleAddArtist}
              className="bg-orange-600 text-white rounded-lg px-6 py-2 mt-4 font-medium hover:bg-orange-700"
            >
              ADD ARTIST
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className="text-orange-600 border border-orange-600 rounded-lg px-6 py-2 font-medium hover:bg-orange-100"
              onClick={openPostArtModal}
            >
              + POST THE ART
            </button>
          </div>
        </div>
      </div>

      {/* Modal for PostArt Form */}
      {isPostArtModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-auto relative">
            <button
              onClick={closePostArtModal}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-500"
            >
              X
            </button>
            <PostShop /> {/* Reuse PostShop component for posting art */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
