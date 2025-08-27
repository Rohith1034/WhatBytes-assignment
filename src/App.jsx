import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Routes,Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/CartPage/CartPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/product' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
