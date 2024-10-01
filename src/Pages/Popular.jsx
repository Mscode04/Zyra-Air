import React from 'react';
import ProductCard from './ProductCard';
import Footer from './Footer';
import '../App.css';
import pop1 from '../Assets/Images/pop1.jpg';
import pop2 from '../Assets/Images/pop2.jpg';
import pop3 from '../Assets/Images/pop3.jpg';
import pop4 from '../Assets/Images/pop4.jpg';
import pop5 from '../Assets/Images/pop5.jpg';
import im1 from '../Assets/Images/image1.jpg';
import im2 from '../Assets/Images/image2.jpg';
import im3 from '../Assets/Images/image3.jpg';
import im4 from '../Assets/Images/image4.jpg';
import im5 from '../Assets/Images/image5.jpg';
import im6 from '../Assets/Images/image6.jpg';
import im7 from '../Assets/Images/image7.jpg';
import im8 from '../Assets/Images/image8.jpg';
import im9 from '../Assets/Images/image9.jpg';



function Popular() {
const bgPop=[pop1,pop2,pop3,pop4,pop5]

    const imageList = [
      {
        id: 1,
        image: im1,
        title: 'Creepex',
        description: 'Crisp aquatic with sea breeze notes.',
        price: '19.99',
      },
      {
        id: 2,
        image: im2,
        title: 'Eax',
        description: 'Woody and earthy, nature-inspired.',
        price: '29.99',
      },
      {
        id: 3,
        image: im3,
        title: 'Roxy',
        description: 'Floral blend of rose and jasmine.',
        price: '39.99',
      },
      {
        id: 4,
        image: im4,
        title: 'Spex',
        description: 'Spicy musk for bold confidence.',
        price: '49.99',
      },
      {
        id: 5,
        image: im5,
        title: 'Sandex',
        description: 'Fresh citrus with sandalwood notes.',
        price: '59.99',
      },
      {
        id: 6,
        image: im6,
        title: 'Amber',
        description: 'Warm vanilla and amber sweetness.',
        price: '69.99',
      },
      {
        id: 7,
        image: im7,
        title: 'Mystique',
        description: 'Seductive blend of patchouli and dark fruits.',
        price: '39.99',
      },
      {
        id: 8,
        image: im8,
        title: 'Elysium',
        description: 'Heavenly floral notes with a hint of spice.',
        price: '54.99',
      },
      {
        id: 9,
        image: im9,
        title: 'Zenith',
        description: 'Fresh green notes balanced with earthy undertones.',
        price: '34.99',
      }
    ];
    



  const bgIndex = Math.floor(Math.random() * bgPop.length);

  return (
    <div
      className="container bg-cover w-full h-screen flex flex-col p-10 pt-20 "
      style={{ backgroundImage: `url(${bgPop[bgIndex]})` }}
    >
      <div className="main flex flex-col items-center p-5 bg-slate-600 opacity-55 -mt-6 h-full -ml-10 -mr-10">
        <h1 className='text-slate-300 text-5xl font-bold mb-32 mt-32'>Trending</h1>
        <span className='mb-28 text-slate-200'>Discover our handpicked selection of popular perfumes, where each fragrance tells its own unique story. These top-rated scents have captured the hearts of many, making them essential additions to any fragrance collection. From invigorating citrus bursts to deep, musky undertones, our popular perfumes are designed to suit every mood and occasion.</span>
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
              />
            ))}
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  )
}

export default Popular
