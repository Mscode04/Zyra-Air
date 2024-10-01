import React from 'react';

function Cart({cart}) {
  console.log(cart)
  return (
    <div className='comp mt-44'>
            {cart.length > 0 ? (
                cart.map((item) => (
                    <ul key={item.id} className='text-gray-700'>
                        <li>{item.title}</li>
                    </ul>
                ))
            ) : (
                <p>No deleted tasks</p>
            )}
    </div>
  );
}

export default Cart;
