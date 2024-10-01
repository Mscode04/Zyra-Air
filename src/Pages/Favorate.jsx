import React from 'react';

function Favorate({ fav, setfav }) {
const handleRemove = (id) => {
    const updatedFav = fav.filter(item => item.id !== id);
    setfav(updatedFav);
};
return (
    <div className='comp mt-14  bg-slate-800 h-screen'>
        {fav.length > 0 ? (
        <div>
            {fav.map((item) => (
            <div key={item.id} className='cart-item flex bg-slate-800 pb-4'>
                <div className="w-1/5 mt-4 ml-4">
                <img src={item.image} alt={item.title} className='w-52 h-full border-2 rounded-md object-cover' />
                </div>
              {/* Product Details on the right */}
            <div className="w-2/3 mt-3 p-1">
            <h3 className='text-xl font-semibold text-slate-100 m-1'>{item.title}</h3>
            <p className='text-sm  text-slate-500 m-1'>{item.description}</p>
            <p className='text-md font-medium text-slate-100 m-1'>Price: ${item.price}</p>
                <button 
                onClick={() => handleRemove(item.id)}
                className='mt-2 bg-slate-600 border-slate-600 border-1  text-xs text-white px-2 py-1 rounded'
                >
                Remove
                </button>
            </div>
            </div>
        ))}
        </div>
    ) : (
        <p>No items in the favorites</p>
)}
    </div>
);
}

export default Favorate;
