import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home'; 
import Team from './Components/Team';
import AboutUs from './Components/AboutUs';
import SignIn from './Components/SignIn';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/signin" element={<SignIn/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
