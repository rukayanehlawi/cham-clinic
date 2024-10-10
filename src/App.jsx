import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';

const App = () => {
  const [showLogin, setshowlogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopUp setshowlogin={setshowlogin} /> : <></>}
      <div className='app'>
        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;