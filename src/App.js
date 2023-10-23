import React from 'react';
import { useLocation } from 'react-router-dom';
import Slider from './components/Layout/Slider';
import Footer from './components/Layout/Footer';
import Head from './components/Layout/Head';
import MenuLeft from './components/Layout/MenuLeft';
import MenuAcc from './components/Layout/MenuAcc';

function App(props) {
  // Sử dụng useLocation để lấy đối tượng location từ react-router-dom
  const location = useLocation();

  // Kiểm tra xem trang hiện tại có phải là trang Home hay không
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Head />
      {isHomePage && <Slider />}
      <section>
        <div className="container">
          <div className="row">
            <MenuAcc />
            {props.children}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
