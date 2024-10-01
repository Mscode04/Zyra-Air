import React from 'react';
import ProductCard from './ProductCard';
import Footer from './Footer';
import '../App.css';
import { bgWomen,imageList } from '../Database/Products';
function Womens({handleAddToCart}) {
  const bgIndex = Math.floor(Math.random() * bgWomen.length);
  return (
    <div
      className="container bg-cover w-full h-screen flex flex-col p-10 pt-20 "
      style={{ backgroundImage: `url(${bgWomen[bgIndex]})` }}
    >
      <div className="main flex flex-col items-center p-5 bg-slate-600 opacity-55 -mt-6 h-full -ml-10 -mr-10">
        <h1 className='text-slate-300 text-5xl font-bold mb-32 mt-32'>Women</h1>
        <span className='mb-28 text-slate-200'>Discover our exquisite range of women’s perfumes that celebrate femininity and elegance. Each fragrance is crafted to capture the essence of modern womanhood, featuring a blend of floral, fruity, and warm notes. Whether you are seeking a light and refreshing scent for daily wear or a deep and sensual fragrance for special occasions, our collection has something for every taste and mood. Embrace your individuality with our carefully selected perfumes and find the one that speaks to you.</span>
      </div>

      <div className="lists relative">
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
        <Footer />
      </div>
    </div>
  );
}

export default Womens;
