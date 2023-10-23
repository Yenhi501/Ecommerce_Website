import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
  const [inputs, setInputs] = useState({
    name: '',
    price: '',
    category: '',
    brand: '',
    sale: '0',
    status: '0',
    company: '',
    detail: '',
  });

  const [avatar, setAvatar] = useState([]);
  const [getFile, setGetFile] = useState('');
  const [error, setError] = useState({});

  const [showData, setShowData] = useState([]);

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorSubmit = {};
    let flag = true;

    if (inputs.name === '') {
      errorSubmit.name = 'Vui lòng nhập name !';
      flag = false;
    }

    const access = localStorage.getItem('accessToken');
    const accessToken = JSON.parse(access);
    const userData = JSON.parse(localStorage.getItem('appState'));

    let config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    };

    const url = `https://localhost/laravel8/laravel8/public/api/user/product/add`;

    let formData = new FormData();
    formData.append('name', inputs.name);
    formData.append('price', inputs.price);
    formData.append('category', inputs.category);
    formData.append('brand', inputs.brand);
    formData.append('company', inputs.company);
    formData.append('detail', inputs.detail);
    formData.append('status', inputs.status);
    formData.append('sale', inputs.sale);

    Object.keys(inputs.avatar).map((item, i) => {
      formData.append('filed[]', inputs.avatar[item]);
    });
  };

  return (
    <div className="col-sm-9">
      <div className="signup-form form_wrapper">
        <div className="title_container">
          <h2>Create Product</h2>
        </div>
        <form action="#" encType="multipart/form-data" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" onChange={handleInput} value={inputs.name} required />
          <input type="text" placeholder="Price" name="price" onChange={handleInput} value={inputs.price} required />
          <select name="category" style={{ marginBottom: '10px', height: '40px' }} onChange={handleInput} value={inputs.category} required>
            <option value="">Please choose category</option>
          </select>
          <select name="brand" style={{ marginBottom: '10px', height: '40px' }} onChange={handleInput} value={inputs.brand} required>
            <option value="">Please choose brand</option>
          </select>
          <select name="status" style={{ marginBottom: '10px', height: '40px' }} onChange={handleInput} value={inputs.sale}>
            <option value="1">Sale</option>
            <option value="0">New</option>
          </select>
          {inputs.status === '1' && (
            <input
              style={{ width: '200px' }}
              type="text"
              placeholder="Sale"
              name="sale"
              onChange={handleInput}
              value={inputs.sale}
              required
            />
          )}
          <input type="text" placeholder="Company profile" name="company" onChange={handleInput} value={inputs.company} required />
          <input type="file" name="avatar" multiple accept="image/*" required />
          <textarea
            style={{ margin: '6px 0' }}
            rows="4"
            cols="50"
            name="detail"
            placeholder="Detail"
            onChange={handleInput}
            value={inputs.detail}
            required
          />
          <button type="submit" className="btn btn-default">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
