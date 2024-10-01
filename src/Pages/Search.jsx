import React, { useState } from 'react';
import Footer from './Footer';
import { imageList, Cartadd, Heart } from '../Database/Products';

function Search({ cart, setcart, fav, setfav }) {
  // State to hold the search term
  const [search, setSearch] = useState('');

  // Filter products based on the search term
  const filProducts = imageList.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container bg-cover w-screen h-screen flex flex-col p-10 pt-20">
      <div className="main flex">
        <div className='head bg-zinc-400 bg-opacity-50 w-screen h-[200px] p-5 flex flex-col items-center justify-center align-middle'>
          <h1 className='text-neutral-950 text-3xl font-bold mb-4 mt-10'>Zyra Air Perfumes</h1>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded-md bg-slate-500 w-[300px] "
          />
        </div>
      </div>
      <div className="lists relative">
        <div className="min-h-screen flex justify-center items-center relative bg-slate-800 -ml-10 -mr-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 p-8">
            {filProducts.map((product) => (
              <div key={product.id} className="max-w-xs rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 z-0 bg-gray-300 relative">
                <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                  <button className="mt-2 fill-gray-800">
                    <img
                      className="h-4 overflow-hidden"
                      src={Heart}
                      onClick={() => {
                        if (!fav.some(item => item.id === product.id)) {
                          setfav([...fav, product]);
                        }
                      }}
                      alt="Add to Favorites"
                    />
                  </button>
                  <div className="mt-4 text-xl font-semibold text-gray-900 flex justify-between">
                    ${product.price}
                    <button>
                      <img
                        src={Cartadd}
                        onClick={() => {
                          if (!cart.some(item => item.id === product.id)) {
                            setcart([...cart, product]);
                          }
                        }}
                        alt="Add to Cart"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Search;
