import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Blog from './components/Blog';
import Detail from './components/Blog/Detail';
import Login from './components/Account/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/list" element={<Blog />} />
          <Route path="/blog/detail/:id" element={<Detail />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
);
reportWebVitals();
