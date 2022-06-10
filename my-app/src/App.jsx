import Header from './component/partials/Header.jsx';
import Main from './component/main/Index.jsx';
import { Routes, Route} from 'react-router-dom';
import Product from './component/main/product/Product.jsx';
import CreateProduct from './component/main/product/CreateProduct.jsx';
import DetailProduct from './component/main/product/DetailProduct.jsx';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/create' element={<CreateProduct/>}/>
        <Route path='/products/:id' element={<DetailProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
