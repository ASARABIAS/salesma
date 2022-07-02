import { Routes, Route} from 'react-router-dom';

import Header from './components/partials/Header.jsx';
import Index from './components/main/Index.jsx';
import Product from './components/main/product/Product.jsx';
import CreateProduct from './components/main/product/CreateProduct.jsx';
import DetailProduct from './components/main/product/DetailProduct.jsx';
import UpdateProduct from './components/main/product/UpdateProduct.jsx';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:id' element={<DetailProduct/>}/>
        <Route path='/products/create' element={<CreateProduct/>}/>
        <Route path='/products/update/:id' element={<UpdateProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
