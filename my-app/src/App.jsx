import { Routes, Route} from 'react-router-dom';

import Header from './component/partials/Header.jsx';
import Index from './component/main/Index.jsx';
import Product from './component/main/product/Product.jsx';
import CreateProduct from './component/main/product/CreateProduct.jsx';
import DetailProduct from './component/main/product/DetailProduct.jsx';
import UpdateProduct from './component/main/product/UpdateProduct.jsx';

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
