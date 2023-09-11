import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Blog from './components/Blog';
import Detail from './components/Blog/Detail';
import Account from './components/Account';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/blog/list" element={<Blog />} />
          <Route path="/blog/detail/:id" element={<Detail />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
);
reportWebVitals();
