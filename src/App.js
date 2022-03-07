import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import Header from './component/layout/Header';
import SideBar from './component/layout/SideBar';
import CreateProduct from './component/system/ProductTable/CreateProduct';
import ListProduct from './component/system/ProductTable/ListProduct';
import productAction from './action/productAction';

const products = [
  {
    category: "Iphone",
    name: "Iphone 5",
    price: "1000",
    active: true
  }
];

function App() {
  const [dataProduct, dispatch] = useReducer(productAction, products);
  
  useEffect(() => {
    console.log(dataProduct);
  })

  const functionCreateProduct = (item) => {
    dispatch({
      type: "CREATE",
      data: item
    });
  }

  return (
    <div className="container">
      <BrowserRouter> 
          <Header></Header>
          <div className="row mt-5">
            <div className="col-3">
              <SideBar />
            </div>
            <div className="col-9">
              <div className="card">
                <Routes>
                  <Route path="product" element={<ListProduct data={dataProduct} />} />
                  <Route path="product/create" element={<CreateProduct functionAddProduct={functionCreateProduct} />} />
                </Routes>
              </div>
            </div>
          </div> 
      </BrowserRouter>

    </div>
  );
}

export default App;
