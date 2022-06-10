import Header from './component/partials/Header.jsx';
import Index from './component/main/Index.jsx';
import { Routes, Route} from 'react-router-dom';
import Product from './component/main/product/Product.jsx';
import CreateProduct from './component/main/product/CreateProduct.jsx';
import DetailProduct from './component/main/product/DetailProduct.jsx';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/create' element={<CreateProduct/>}/>
        <Route path='/products/1' element={<DetailProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
