import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/cart">Cart 🛒 ({totalQuantity})</Link>
    </nav>
  );
};

export default Navbar;
