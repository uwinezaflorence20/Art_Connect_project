// import { useParams } from "react-router-dom";
// import { useState } from "react";

// const ProductDetail = () => {
//   const { productId } = useParams();

//   // Example product data (In a real app, you would fetch this from an API or a database)
//   const productData = {
//     title: "Google Pixel 4a",
//     description:
//       "The Google Pixel 4a is an Android smartphone with an excellent camera and a clean Google experience. It's known for its powerful performance and sleek design.",
//     price: 180000,
//     contact: {
//       phone: "+250XXXXXXXXXX",
//       email: "seller@example.com",
//     },
//     imageUrl: "/im1.jpg",
//     category: "Mobile phones & Tablets",
//     location: "Kigali",
//     posted: "a day ago",
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {/* Product Title and Category */}
//       <h1 className="text-4xl font-bold text-center text-orange-500 mb-4">{productData.title}</h1>
//       <p className="text-lg text-gray-700 mb-4">{productData.category} | {productData.location} | Posted: {productData.posted}</p>

//       {/* Product Image */}
//       <img
//         src={productData.imageUrl}
//         alt={productData.title}
//         className="w-full h-96 object-cover rounded-lg shadow-lg mb-4"
//       />

//       {/* Product Description */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
//         <p className="text-lg text-gray-700">{productData.description}</p>
//       </section>

//       {/* Product Price */}
//       <div className="flex justify-between items-center mb-6">
//         <p className="text-2xl font-bold text-orange-500">{productData.price} RWF</p>
//         <button className="bg-orange-500 text-white py-2 px-4 rounded-md font-medium shadow hover:bg-orange-600 transition">
//           Buy Now
//         </button>
//       </div>

//       {/* Contact Information */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
//         <p className="text-lg text-gray-700">Phone: <a href={`tel:${productData.contact.phone}`} className="text-blue-500">{productData.contact.phone}</a></p>
//         <p className="text-lg text-gray-700">Email: <a href={`mailto:${productData.contact.email}`} className="text-blue-500">{productData.contact.email}</a></p>
//       </section>

//       {/* Ad Owner Section */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ad Owner</h2>
//         <p className="text-lg text-gray-700">This product is listed by a trusted seller.</p>
//         <button className="bg-green-500 text-white py-2 px-4 rounded-md font-medium shadow hover:bg-green-600 transition">
//           Contact Seller
//         </button>
//       </section>
//     </div>
//   );
// };

// export default ProductDetail;
