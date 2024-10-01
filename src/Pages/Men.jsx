import React from 'react';
import ProductCard from './ProductCard';
import Footer from './Footer';
import '../App.css';
import { bgMen,imageList } from '../Database/Products';

function Mens({ handleAddToCart }) {

  const bgIndex = Math.floor(Math.random() * bgMen.length);

  return (
    <div
      className="container bg-cover w-full h-screen flex flex-col p-10 pt-20 "
      style={{ backgroundImage: `url(${bgMen[bgIndex]})` }}
    >
      <div className="main flex flex-col items-center p-5 bg-slate-600 opacity-55 -mt-6 h-full -ml-10 -mr-10">
        <h1 className='text-slate-300 text-5xl font-bold mb-32 mt-32'>Men</h1>
        <span className='mb-28 text-slate-200'>Discover our exclusive range of men's perfumes that embody sophistication and confidence. Each fragrance is thoughtfully curated, blending unique notes that reflect the modern man's lifestyle. From refreshing citrus to deep, earthy aromas, our collection offers a scent for every occasion—whether you’re heading to the office, going out for a night on the town, or enjoying a weekend getaway. Elevate your fragrance game with our selection of men's perfumes and find your signature scent that resonates with your personality</span>
      </div>

      <div className="lists relative  ">
        <div className="min-h-screen flex justify-center items-center relative bg-slate-800 -ml-10 -mr-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 p-10">
            {imageList.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  );
}

export default Mens;
