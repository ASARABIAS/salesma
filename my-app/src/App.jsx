import { Routes, Route} from 'react-router-dom';

import Header from './components/partials/Header.jsx';
import Index from './components/main/Index.jsx';
import Product from './components/main/product/Product.jsx';
import CreateProduct from './components/main/product/CreateProduct.jsx';
import DetailProduct from './components/main/product/DetailProduct.jsx';
import UpdateProduct from './components/main/product/UpdateProduct.jsx';
import Sales from './components/main/sale/Sales.jsx';
import CreateSale from './components/main/sale/CreateSale.jsx';
import Client from './components/main/client/Client.jsx';
import CreateClient from './components/main/client/CreateClient.jsx';
import DetailClient from './components/main/client/DetailClient.jsx';
import UpdateClient from './components/main/client/UpdateClient.jsx';
import DetailSale from './components/main/sale/DatailSales';
import UpdateSales from './components/main/sale/UpdateSales.jsx';

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
        <Route path='/sales' element={<Sales/>}/>
        <Route path='/sales/:id' element={<DetailSale/>}/>
        <Route path='/sales/create' element={<CreateSale/>}/>
        <Route path='/sales/update/:id' element={<UpdateSales/>}/>
        <Route path='/clients' element={<Client/>}/>
        <Route path='/clients/:id' element={<DetailClient/>}/>
        <Route path='/clients/create' element={<CreateClient/>}/>
        <Route path='/clients/update/:id' element={<UpdateClient/>}/>
      </Routes>
    </>
  );
}

export default App;
