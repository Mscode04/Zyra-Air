import React, { useState } from 'react';
function Cart({ cart }) {
  // Initialize cart state with default quantity of 1 for each item if not provided
  const [updatedCart, setUpdatedCart] = useState(
    cart.map(item => ({
      ...item,
      quantity: item.quantity || 1,  // Default quantity to 1 if not provided
    }))
  );

  // Function to handle quantity change
  const handleQuantityChange = (id, quantity) => {
    const newCart = updatedCart.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setUpdatedCart(newCart);
  };

  // Function to handle item deletion
  const handleDelete = (id) => {
    const newCart = updatedCart.filter(item => item.id !== id);
    setUpdatedCart(newCart);
  };

  // Calculate total price including updated quantities
  const totalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='comp mt-14 h-screen bg-slate-900'>
      {updatedCart.length > 0 ? (
        <div>
          {updatedCart.map((item) => (
            <div key={item.id} className='cart-item flex bg-slate-900         pb-4'>
                <div className="w-1/5 mt-4 ml-4">
                  <img src={item.image} alt={item.title} className='w-52 h-full border-2 border-slate-600 rounded-md object-cover' />
                </div>
              {/* Product Details on the right */}
              <div className="w-2/3  mt-3 p-1">
                <h3 className='text-xl font-semibold text-slate-100 m-1'>{item.title}</h3>
                <p className='text-sm  text-slate-500 m-1'>{item.description}</p>
                <p className='text-md font-medium text-slate-100 m-1'>Price: ${item.price}</p>
                <div className='mt-1'>
                  <label className='text-md font-medium ml-1 text-slate-500'>Quantity: </label>
                  <input 
                    type="number" 
                    min="1"
                    value={item.quantity} 
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className='w-12 ml-1 p-2 rounded bg-slate-900 text-slate-400 border-0 h-5'
                  />
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className='mt-2 bg-slate-800 border-slate-600 border-1  text-xs text-white px-2 py-1 rounded'
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price Section */}
          <div className='total-section p-5 bg-slate-900 flex flex-col items-center'>
            <h2 className='text-2xl mt-6 font-bold flex justify-between bg-slate-500 p-2 w-full'><h3 className='mr-9 text-slate-950'>Total Price:</h3> <h3>${totalPrice.toFixed(2)}</h3></h2>
            <h2 className='text-2xl mt-6 font-bold flex justify-between bg-slate-500 p-2 w-full'><h3 className='mr-9 text-slate-950'>Discount:</h3> <h3>${(totalPrice.toFixed(2)*0.20).toFixed(2)}</h3></h2>
            <h2 className='text-2xl mt-6 font-bold flex justify-between bg-slate-500 p-2 w-full'><h3 className='mr-9 text-slate-950'>Final Price:</h3> <h3>${((totalPrice.toFixed(2))-(totalPrice.toFixed(2)*0.20).toFixed(2)).toFixed(0)}</h3></h2>
            <button className='mt-10 mb-32 w-1/4 bg-slate-300 text-slate-800 px-6 py-2 rounded'>
              Proceed to Payment
            </button>
          </div>
        </div>
      ) : (
        <p>No items in the cart</p>
      )}

    </div>
  );
}

export default Cart;
