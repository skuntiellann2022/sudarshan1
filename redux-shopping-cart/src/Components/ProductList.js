import { useDispatch } from 'react-redux';
import { addToCart } from './Cartslice';

const products = [
  { id: 1, name: 'Product A', price: 25 },
  { id: 2, name: 'Product B', price: 30 },
  { id: 3, name: 'Product C', price: 45 },
  { id: 4, name: 'Product D', price: 15 },
];

const ProductList = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <span>{p.name} - ${p.price}</span>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
