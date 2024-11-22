import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Components/UserContext';
import Layout from './Components/Layout';
import Home from './Components/Home'; 
import Team from './Components/Team';
import AboutUs from './Components/AboutUs';
import SignIn from './Components/SignIn';
import Service from './Components/Services';
import ContactUs from './Components/ContactUs';



import ProductAdmin from './Admin/ProductAdmin';
import LayoutAdmin from './Admin/sharedAdmin/LayoutAdmin';
import DashboardAdmin from './Admin/DashboardAdmin';
import Orders from './Admin/Orders';
import Customers from './Admin/Customers';
import Transactions from './Admin/Transactions';
import Messages from './Admin/Messages';
function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Route>

        <Route path="/" element={<LayoutAdmin />}>
            <Route path="dashboardadmin" element={<DashboardAdmin />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="messages" element={<Messages />} />
            <Route path="productadmin" element={<ProductAdmin/>} />

            
          </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
