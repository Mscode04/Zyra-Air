import './App.css';
import Navbar from './Pages/Navbar';
import Men from './Pages/Men';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Women from './Pages/Women';
import Popular from './Pages/Popular';
import Home from './Pages/Home';
import { Routes, Route, } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [cart, setcart] = useState([]);
  return (
    <div className="App flex flex-wrap flex-col bg-orange-100">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home cart={cart} setcart={setcart}/>} />
        <Route path='/men' element={<Men />} />
        <Route path='/cart' element={<Cart cart={cart}/>} /> 
        <Route path='/popular' element={<Popular />} />
        <Route path='/about' element={<About />} />
        <Route path='/women' element={<Women />} />
      </Routes>
    </div>
  );
}

export default App;
