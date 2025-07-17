import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CartPage from './Components/CartPage';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
