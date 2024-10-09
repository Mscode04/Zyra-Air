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
import Favorate from './Pages/Favorate';
import Search from './Pages/Search';


function App() {
  const [cart, setcart] = useState([]);
  const [fav, setfav] = useState([]);
  return (
    <div className="App flex flex-wrap flex-col bg-slate-400">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home cart={cart} setcart={setcart} fav={fav} setfav={setfav} />} />
        <Route path='/ser' element={<Search cart={cart} setcart={setcart} fav={fav} setfav={setfav} />} />
        <Route path='/men' element={<Men  cart={cart} setcart={setcart} fav={fav} setfav={setfav}/>} />
        <Route path='/cart' element={<Cart cart={cart}/>} /> 
        <Route path='/fav' element={<Favorate fav={fav} setfav={setfav}/>} /> 
        <Route path='/popular' element={<Popular cart={cart} setcart={setcart} fav={fav} setfav={setfav} />} />
        <Route path='/about' element={<About />} />
        <Route path='/women' element={<Women cart={cart} setcart={setcart} fav={fav} setfav={setfav}/>} />
      </Routes>
    </div>
  );
}

export default App;
