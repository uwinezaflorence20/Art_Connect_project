import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../UserContext";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Team from "./Components/Team";
import AboutUs from "./Components/AboutUs";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import OtpVerification from "./Components/OtpVerfication";
import Service from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import ResetPassword from "./Components/ResetPassword";

import ProductAdmin from "./Admin/ProductAdmin";
import LayoutAdmin from "./Admin/sharedAdmin/LayoutAdmin";
import DashboardAdmin from "./Admin/DashboardAdmin";
import Orders from "./Admin/Orders";
import Customers from "./Admin/Customers";
import Transactions from "./Admin/Transactions";
import Messages from "./Admin/Messages";

import Layoutwo from "./User/Layoutwo";
import Home2 from "./User/Home2";
import PostAds from "./User/PostAds";
import Profile from "./User/Profile";
import Shop from "./User/Shop";
import ShopDetails from "./User/ShopDetails";

// import ArtistDetails from "./User/ArtistDetails";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="team" element={<Team />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="otp-verify" element={<OtpVerification />} />
            <Route path="service" element={<Service />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="resetpassword" element={<ResetPassword />} />
          </Route>

          {/* Admin Layout */}
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<DashboardAdmin />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="messages" element={<Messages />} />
            <Route path="productadmin" element={<ProductAdmin />} />
          </Route>

          {/* User Layout */}
          <Route path="/user" element={<Layoutwo />}>
            <Route index element={<Home2 />} />
            <Route path="ads" element={<PostAds />} />
            <Route path="profile" element={<Profile />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shopdetails" element={<ShopDetails />} />
            {/* <Route path="artist" element={<ArtistDetails/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
