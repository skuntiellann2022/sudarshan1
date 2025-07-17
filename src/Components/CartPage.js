import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, removeFromCart } from './Cartslice';

const CartPage = () => {
  const { cartItems, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map(item => (
        <div key={item.id}>
          <span>{item.name} - ${item.price} × </span>
          <input
            type="number"
            value={item.quantity}
            onChange={e =>
              dispatch(changeQuantity({ id: item.id, quantity: +e.target.value }))
            }
          />
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
