import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Blog from './components/Blog';
import Detail from './components/Blog/Detail';
import Update from './components/Account/UpdateUser';
import Accounts from './components/User';
import AddProduct from './components/Account/AddProduct';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/account" element={<Accounts />} />
          <Route path="/account/update" element={<Update />} />
          <Route path="/account/product/add" element={<AddProduct />} />
          <Route path="/account/my-product" element={<AddProduct />} />
          <Route path="/blog/list" element={<Blog />} />
          <Route path="/blog/detail/:id" element={<Detail />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
);
reportWebVitals();
