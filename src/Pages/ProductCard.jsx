import addc from '../Assets/Main/icons8-add-to-cart-32.png';
import her from '../Assets/Main/heart.png';

function ProductCard({ image, title, description, price, }) {
  return (
    <div className="max-w-xs rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 z-0 bg-gray-300 relative">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        <button className="mt-2 fill-gray-800">
          <img className="h-4 overflow-hidden" src={her} alt="Add to Favorites" />
        </button>

        <div className="mt-4 text-xl font-semibold text-gray-900 flex justify-between">
          ${price}
          <button >
            <img src={addc} alt="Add to Cart" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
