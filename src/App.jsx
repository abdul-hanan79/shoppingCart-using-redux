import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './components/CartPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path='/' element={<ProductCard />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
