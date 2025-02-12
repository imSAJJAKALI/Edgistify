import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Smartphone',
    description: 'Latest model with advanced features.',
    price: 699,
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'High-quality sound and noise cancellation.',
    price: 299,
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    name: 'Gaming Laptop',
    description: 'Powerful specs for gaming and productivity.',
    price: 1299,
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    name: 'Smartwatch',
    description: 'Track your fitness and stay connected.',
    price: 199,
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 5,
    name: 'Camera',
    description: 'Capture your moments in high resolution.',
    price: 499,
    image: 'https://via.placeholder.com/300x200',
  },
];

const Shop: React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Shop All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              onClick={()=>navigate(`/shop/product/${product.id}`)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
              {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Add to Cart
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
