import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import Footer from './Footer';
import {randomImageList,Homeimages,bgHomeImages,Heart,Cartadd} from '../Database/Products';
function Home({cart,setcart,fav,setfav}) {
    const imageList =randomImageList
    const randomIndex = Math.floor(Math.random() * Homeimages.length)
  return (
    <div
      className="container bg-cover w-full h-screen flex flex-col p-10 pt-20"
      style={{ backgroundImage: `url(${bgHomeImages[randomIndex]})` }}
    >
          <div className="main flex ">
          <div className='head bg-zinc-400 bg-opacity-50 w-1/2 h-[400px] p-5 mt-10 flex-1 flex-row items-center justify-center align-middle' >
              <h1 className='text-neutral-950 text-3xl font-bold mb-4 mt-16'>Zyra Air Perfumes</h1>
              <span className='text-md font-medium text-zinc-900'>Zyra Air Perfumes offers a captivating collection of fragrances designed to elevate your senses and enhance your mood. Each scent is meticulously crafted, blending unique notes that evoke elegance and sophistication. Whether you seek a refreshing burst of citrus or a warm, woody essence, Zyra Air Perfumes caters to every preference, ensuring you find the perfect signature scent. Embrace the art of fragrance with Zyra, where every spritz tells a story</span>
          </div>
          <div className="image">
            <img src={Homeimages[randomIndex]} className="h-[400px] mt-10 opacity-80" alt=""/>
          </div>
          </div>
          <div className="btnex  flex justify-center">
            <Link to='/popular'><button className='w-[120px] h-[40px] rounded-md mt-6 mb-12  text-zinc-300 bg-slate-900 '>Explore More</button></Link>
          </div>
          <div className="lists relative ">
          <div className=" min-h-screen flex justify-center items-center relative bg-slate-800 -ml-10 -mr-10">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 p-10">
        {imageList.map((product) => (
            <div className="max-w-xs rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 z-0 bg-gray-300 relative">
            <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              <button className="mt-2 fill-gray-800">
                <img className="h-4 overflow-hidden" src={Heart}   onClick={() => {
                      if (!fav.some(item => item.id === product.id)) {
                        setfav([...fav, product]);
                      }
                    }}  alt="Add to Favorites" />
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
    <Footer/>
  </div>
    </div>
  )
}
export default Home