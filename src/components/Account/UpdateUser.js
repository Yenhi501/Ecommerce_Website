import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Update = () => {
  const [getFile, setGetFile] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState({});
  const [getValueInput, setGetValueInput] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('appState'));
    console.log('userData', userData);
    setGetValueInput({
      name: userData.name,
      email: userData.email,
      password: '',
      phone: userData.phone,
      address: userData.address,
    });
  }, []);

  const handleFileImage = (e) => {
    const file = e.target.files;

    let reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
      setGetFile(file[0]);
    };
    reader.readAsDataURL(file[0]);
  };
  const handleValues = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setGetValueInput((state) => ({ ...state, [nameInput]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errorSubmit = {};
    let flag = true;

    if (getValueInput.name === '') {
      errorSubmit.name = 'Please enter your name';
      flag = false;
    }

    function isEmail(email) {
      var regax = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regax.test(email);
    }

    if (getValueInput.email === '') {
      errorSubmit.email = 'Please enter your email';
      flag = false;
    } else {
      if (!isEmail(getValueInput.email)) {
        errorSubmit.email = 'Please enter correct email format';
        flag = false;
      }
    }

    if (getValueInput.phone === '') {
      errorSubmit.phone = 'Please enter your phone';
      flag = false;
    }

    if (getValueInput.address === '') {
      errorSubmit.address = 'Please enter your address';
      flag = false;
    }

    if (getFile === '') {
      errorSubmit.getFile = 'Please choose a photo';
      flag = false;
    } else {
      if (getFile.size > 1024 * 1024) {
        errorSubmit.getFile = 'Please choose a photo with a smaller resolution';
        flag = false;
      }

      const photoTail = ['png', 'jpg', 'jpeg', 'PNG', 'JPG'];
      const fileType = getFile.name.split('.').pop();
      if (!photoTail.includes(fileType)) {
        errorSubmit.getFile = `Please choose an image ending in: ${photoTail.join(', ')}`;
        flag = false;
      }
    }

    if (!flag) {
      setError(errorSubmit);
    } else {
      try {
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

        const url = `https://localhost/laravel8/laravel8/public/api/user/update/${userData.id}`;

        const formData = new FormData();
        formData.append('name', getValueInput.name);
        formData.append('email', getValueInput.email);
        formData.append('password', getValueInput.password);
        formData.append('phone', getValueInput.phone);
        formData.append('address', getValueInput.address);
        formData.append('avatar', avatar);
        formData.append('level', '0');

        const response = await axios.post(url, formData, config);

        if (response.data.errors) {
          setError(response.data.errors);
        } else {
          alert('Update thành công');
          localStorage.setItem('auth', JSON.stringify(response.data.Auth));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="col-sm-9">
      <div className="signup-form form_wrapper">
        <div className="title_container">
          <h2>User Update</h2>
        </div>
        <form action="#" encType="multipart/form-data" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" value={getValueInput.name} onChange={handleValues} />
          <div className="msg-error">{error.name ? error.name : null}</div>
          <input readOnly type="text" placeholder="Email" name="email" value={getValueInput.email} onChange={handleValues} />
          <div className="msg-error">{error.email ? error.email : null}</div>
          <input type="password" placeholder="Password" name="password" value={getValueInput.password} onChange={handleValues} />
          <div className="msg-error">{error.password ? error.password : null}</div>
          <input type="text" placeholder="Number phone" name="phone" value={getValueInput.phone} onChange={handleValues} />
          <div className="msg-error">{error.phone ? error.phone : null}</div>
          <input type="text" placeholder="Address" name="address" value={getValueInput.address} onChange={handleValues} />
          <div className="msg-error">{error.address ? error.address : null}</div>
          <input type="file" name="avatar" onChange={handleFileImage} />
          <div>{error.getFile ? error.getFile : null}</div>
          <button type="submit" className="btn btn-default">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
